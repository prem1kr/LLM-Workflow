import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./views/ArticleList";
import ArticleDetails from "./views/ArticleDetails";
import ArticleCreate from "./views/ArticleCreate";
import ArticleUpdate from "./views/ArticleUpdate";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/create" element={<ArticleCreate />} />
<Route path="/article/edit/:id" element={<ArticleUpdate />} />

      </Routes>
    </BrowserRouter>
  );
}
