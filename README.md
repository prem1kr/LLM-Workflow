# BeyondChats Articles Management

A full-stack application to **scrape, manage, update, and view articles** from BeyondChats blogs.
It includes:

* **Phase 1:** Scrape oldest 5 articles from BeyondChats and store in MongoDB.
* **Phase 2:** Enhance articles using Google top-ranking competitor content.
* **Phase 3:** React frontend to view, create, update, and delete articles.

---

## 📂 Project Structure

### Backend (Node.js + Express + MongoDB)

```
backend/
│── src/
│   │── config/
│   │   └── db.js
│   │── models/
│   │   └── Article.model.js
│   │── repositories/
│   │   └── Article.repository.js
│   │── services/
│   │   └── Article.service.js
│   │── controllers/
│   │   └── Article.controller.js
│   │── routes/
│   │   └── Article.routes.js
│   │── scrapers/
│   │   ├── beyondChats.scraper.js       # Phase 1
│   │   └── googleCompetitor.scraper.js # Phase 2
│   │── utils/
│   │   ├── httpClient.js
│   │   └── llm.helper.js
│   │── server.js
└── package.json
```

### Frontend (React + React Router)

```
frontend/
│── src/
│   │── api/
│   │   └── article.api.js
│   │── controllers/
│   │   └── Article.controller.js
│   │── models/
│   │   └── Article.model.js
│   │── components/
│   │   ├── ArticleCard.jsx
│   │   ├── ArticleContent.jsx
│   │   └── Tabs.jsx
│   │── views/
│   │   ├── ArticleList.jsx
│   │   ├── UpdatedArticleList.jsx
│   │   ├── ArticleDetails.jsx
│   │   └── ArticleCreate.jsx
│   │── App.jsx
│   │── index.js
│   │── styles.css
└── package.json
```

---

## ⚙️ Features

* **Backend:**

  * CRUD APIs for articles
  * Original and updated article versioning
  * Scraping BeyondChats blogs

* **Frontend:**

  * View original and updated articles
  * Article details page with references
  * Create, update, delete articles
  * Tabs to switch between original and updated articles
* **Automation:**

  * Phase 1 scraper fetches 5 oldest BeyondChats articles
  * Phase 2 script updates articles using LLM and competitor references

---

## 🛠 Backend Setup

1. Clone repo and install dependencies:

```bash
cd backend
npm install
```

2. Create `.env` file:

```
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

3. Run server:

```bash
npm run dev
```

4. Run Phase 1 scraper (fetch BeyondChats articles):

```bash
npm run scrape:phase1
```

5. Run Phase 2 script (update articles with GPT & competitors):

```bash
npm run scrape:phase2
```

---

## 🛠 Frontend Setup

1. Go to frontend folder and install dependencies:

```bash
cd frontend
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🗂 Frontend Pages

| Page            | Route                   | Description                                  |
| --------------- | ----------------------- | -------------------------------------------- |
| Article List    | `/`                     | View original and updated articles with tabs |
| Article Details | `/article/:id`          | View full content with references            |
| Create Article  | `/create`               | Form to manually add a new article           |
| Edit Article    | `/article/edit/:id`     | Update existing article                      |
| Delete Article  | On Article Details page | Deletes article and redirects to list        |

---

## 💡 Usage

1. Scrape articles using Phase 1 script.
2. Update articles using Phase 2 script.
3. Manage articles (create, update, delete) via frontend UI.
4. All article updates store references to original/competitor content for transparency.

---

## ⚡ Notes

* Ensure MongoDB is running and `.env` variables are correct.
* Use Node.js v18+.
* React frontend communicates with backend on `http://localhost:5000/api/articles`.
* Phase 2 requires a valid OpenAI API key for GPT-based rewriting.