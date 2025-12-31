import axios from "axios";

export const http = axios.create({
  timeout: 15000,
  headers: { "User-Agent": "Mozilla/5.0 Scraper Bot" }
});
