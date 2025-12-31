import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="card">

      <h3>{article.title}</h3>

      <p>
        Source: <b>{article.source}</b>
      </p>

      <Link to={`/article/${article._id}`}>
        Read Article →
      </Link>

    </div>
  );
}
