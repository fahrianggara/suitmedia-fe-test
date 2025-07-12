import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SUITMEDIA_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})

export default apiClient