import service from "../services/Article.service.js";

class ArticleController {
  async create(req, res) {
    try {
      const article = await service.createArticle(req.body);
      res.json(article);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    const articles = await service.getArticles();
    res.json(articles);
  }

  async getOne(req, res) {
    const article = await service.getArticle(req.params.id);
    res.json(article);
  }

  async update(req, res) {
    const updated = await service.updateArticle(req.params.id, req.body);
    res.json(updated);
  }

  async delete(req, res) {
    await service.deleteArticle(req.params.id);
    res.json({ message: "Deleted" });
  }
}

export default new ArticleController();
