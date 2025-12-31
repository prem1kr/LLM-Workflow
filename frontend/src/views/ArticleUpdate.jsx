import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import controller from "../controllers/Article.controller.js";

export default function ArticleUpdate() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    source: "original"
  });

  const [loading, setLoading] = useState(true);

  // Load article into form
  useEffect(() => {
    (async () => {
      const data = await controller.fetchArticle(id);

      setForm({
        title: data.title,
        content: data.content,
        source: data.source || "original"
      });

      setLoading(false);
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await controller.updateArticle(id, form);

    alert("Article updated successfully");

    navigate(`/`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">

      <h2>Edit Article</h2>

      <form onSubmit={handleSubmit}>

        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />

        <textarea
          rows="8"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          placeholder="Content"
        />

        <select
          value={form.source}
          onChange={e => setForm({ ...form, source: e.target.value })}
        >
          <option value="original">Original</option>
          <option value="updated">Updated</option>
        </select>

        <button type="submit">
          Update Article
        </button>

      </form>

    </div>
  );
}
