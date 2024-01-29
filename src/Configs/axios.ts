import axios from "axios";
import {  VITE_AUTH_API_URL } from "./EnviromentVariables";

const axiosInstance = axios.create({
  baseURL: VITE_AUTH_API_URL,
  withCredentials: true
});
export default axiosInstance;
