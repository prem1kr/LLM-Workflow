import { ArticleAPI } from "../api/article.api.js";
import { Article } from "../models/Article.model.js";

class ArticleController {

  async fetchArticles() {
    const res = await ArticleAPI.getAll();
    return res.data.map(a => new Article(a));
  }

  async fetchArticle(id) {
    const res = await ArticleAPI.getOne(id);
    return new Article(res.data);
  }

  async createArticle(data) {
    const res = await ArticleAPI.create(data);
    return new Article(res.data);
  }

  async updateArticle(id, data) {
    const res = await ArticleAPI.update(id, data);
    return new Article(res.data);
  }

  async deleteArticle(id) {
    return ArticleAPI.remove(id);
  }
}

export default new ArticleController();
