import "dotenv/config.js";
import { http } from "../utils/httpClient.js";
import * as cheerio from "cheerio";
import service from "../services/Article.service.js";
import { connectDB } from "../config/db.js";

const LAST_PAGE_URL = "https://beyondchats.com/blogs/page/last/";

async function scrapePhase1() {
  await connectDB();

  const { data } = await http.get(LAST_PAGE_URL);
  const $ = cheerio.load(data);

  const articles = [];

  $(".post-item").slice(0, 5).each((_, el) => {
    articles.push({
      title: $(el).find("h2").text().trim(),
      url: $(el).find("a").attr("href"),
      image: $(el).find("img").attr("src")
    });
  });

  for (const a of articles) {
    const page = await http.get(a.url);
    const $$ = cheerio.load(page.data);

    a.content = $$(".post-content").text().trim();
    a.source = "original";

    await service.createArticle(a);
  }

  console.log("Saved 5 oldest articles");
  process.exit();
}

scrapePhase1();
