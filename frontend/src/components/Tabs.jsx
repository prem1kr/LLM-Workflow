export default function Tabs({ active, setActive }) {
  return (
    <div className="tabs">

      <button
        className={active === "original" ? "active" : ""}
        onClick={() => setActive("original")}
      >
        Original Articles
      </button>

      <button
        className={active === "updated" ? "active" : ""}
        onClick={() => setActive("updated")}
      >
        Updated Articles
      </button>

    </div>
  );
}
