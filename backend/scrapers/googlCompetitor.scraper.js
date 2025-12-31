import "dotenv/config.js";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { http } from "../utils/httpClient.js";
import { rewriteArticle } from "../utils/llm.helper.js";
import { connectDB } from "../config/db.js";
import service from "../services/Article.service.js";

async function searchGoogle(title) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(
    `https://www.google.com/search?q=${encodeURIComponent(title)}`
  );

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a h3"))
      .slice(0, 2)
      .map(el => el.parentElement.href)
  );

  await browser.close();
  return links;
}

async function scrapeContent(url) {
  const { data } = await http.get(url);
  const $ = cheerio.load(data);

  return (
    $("article, .post-content, .entry-content, .blog-content")
      .text()
      .replace(/\s+/g, " ")
      .trim() || ""
  );
}

async function runPhase2() {
  await connectDB();

  const articles = await service.getArticles();

  for (const article of articles.filter(a => a.source === "original")) {
    const urls = await searchGoogle(article.title);

    const ref1 = await scrapeContent(urls[0]);
    const ref2 = await scrapeContent(urls[1]);

    const rewritten = await rewriteArticle(
      article.content,
      ref1,
      ref2,
      urls
    );

    await service.createArticle({
      title: article.title + " (Updated)",
      content: rewritten,
      source: "updated",
      updatedFrom: article._id,
      references: urls
    });

    console.log("Updated:", article.title);
  }

  process.exit();
}

runPhase2();
