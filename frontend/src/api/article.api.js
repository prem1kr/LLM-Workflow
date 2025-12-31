import axios from "axios";

const API_URL = "https://llm-workflow-backend.onrender.com/api/articles";

export const ArticleAPI = {
  getAll: () => axios.get(API_URL),

  getOne: (id) => axios.get(`${API_URL}/${id}`),

  create: (data) => axios.post(API_URL, data),

  update: (id, data) => axios.put(`${API_URL}/${id}`, data),

  remove: (id) => axios.delete(`${API_URL}/${id}`)
};
