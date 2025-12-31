import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- useNavigate hook
import controller from "../controllers/Article.controller.js";

export default function ArticleCreate() {
  const navigate = useNavigate(); // <-- create navigate function

  const [form, setForm] = useState({
    title: "",
    content: "",
    source: "original"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await controller.createArticle(form);
      alert("Article Created Successfully");

      navigate("/"); // <-- redirect to home page
    } catch (err) {
      console.error(err);
      alert("Failed to create article");
    }
  };

  return (
    <div className="container">
      <h2>Create Article</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          rows="8"
          placeholder="Content"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
        />

        <select
          value={form.source}
          onChange={e => setForm({ ...form, source: e.target.value })}
        >
          <option value="original">Original</option>
          <option value="updated">Updated</option>
        </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
