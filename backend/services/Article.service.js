import repo from "../repositories/Article.repository.js";

class ArticleService {
  createArticle(data) {
    return repo.create(data);
  }

  getArticles() {
    return repo.findAll();
  }

  getArticle(id) {
    return repo.findById(id);
  }

  updateArticle(id, data) {
    return repo.update(id, data);
  }

  deleteArticle(id) {
    return repo.delete(id);
  }
}

export default new ArticleService();
