import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todo-backend-beige.vercel.app/api/v1" 
});

export default axiosInstance;
