import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todo-backend-beige.vercel.app" 
});

export default axiosInstance;
