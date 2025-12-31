export class Article {
  constructor(data = {}) {
    this._id = data._id;
    this.title = data.title || "";
    this.content = data.content || "";
    this.source = data.source || "original";
    this.references = data.references || [];
    this.updatedFrom = data.updatedFrom || null;
    this.createdAt = data.createdAt;
  }
}
