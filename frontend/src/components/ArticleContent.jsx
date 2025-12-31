export default function ArticleContent({ article }) {
  return (
    <div>

      <h2>{article.title}</h2>

      <p>{article.content}</p>

      {article.updatedFrom && (
        <p>
          <i>Updated version of article: {article.updatedFrom}</i>
        </p>
      )}

      {article.references?.length > 0 && (
        <>
          <h4>References</h4>
          <ul>
            {article.references.map((r, i) => (
              <li key={i}>
                <a href={r} target="_blank" rel="noreferrer">
                  {r}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
}
