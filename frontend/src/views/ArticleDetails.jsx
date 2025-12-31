import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import controller from "../controllers/Article.controller.js";
import ArticleContent from "../components/ArticleContent.jsx";

export default function ArticleDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await controller.fetchArticle(id);
      setArticle(data);
      setLoading(false);
    })();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmDelete) return;

    try {
      await controller.deleteArticle(id);
      alert("Article deleted successfully");
      navigate("/"); // redirect to list page
    } catch (err) {
      console.error(err);
      alert("Failed to delete article");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div className="container">

      <ArticleContent article={article} />

      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>

        <Link to={`/article/edit/${article._id}`}>
          Edit Article
        </Link>

        <button
          onClick={handleDelete}
          style={{
            background: "crimson",
            color: "white",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Delete Article
        </button>
      </div>

    </div>
  );
}
