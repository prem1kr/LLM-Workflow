import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import controller from "../controllers/Article.controller.js";
import ArticleCard from "../components/ArticleCard.jsx";
import Tabs from "../components/Tabs.jsx";

export default function ArticleList() {

  const [articles, setArticles] = useState([]);
  const [active, setActive] = useState("original");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await controller.fetchArticles();
      setArticles(data);
    })();
  }, []);

  const filtered = articles.filter(a =>
    active === "updated"
      ? a.source === "updated"
      : a.source !== "updated"
  );

  return (
    <div className="container">

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Articles</h1>

        <button
          onClick={() => navigate("/create")}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          + Create Article
        </button>
      </div>

      <Tabs active={active} setActive={setActive} />

      <div className="grid" style={{ marginTop: "16px" }}>
        {filtered.map(a => (
          <ArticleCard key={a._id} article={a} />
        ))}
      </div>

    </div>
  );
}
