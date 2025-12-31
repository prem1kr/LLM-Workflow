import Article from "../models/Article.model.js";

class ArticleRepository {
  create(data) {
    return Article.create(data);
  }

  findAll() {
    return Article.find().sort({ createdAt: -1 });
  }

  findById(id) {
    return Article.findById(id);
  }

  update(id, data) {
    return Article.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return Article.findByIdAndDelete(id);
  }
}

export default new ArticleRepository();
