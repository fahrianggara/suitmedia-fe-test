import axios from "axios";

const apiClient = axios.create({
  baseURL: '/suitmedia-api',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})

export default apiClient