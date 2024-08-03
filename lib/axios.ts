import axios, { AxiosRequestConfig } from "axios";
import environment from "@/components/utils/environment";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: environment.API_URL,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    "X-API-Key": environment.API_KEY,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    switch (error?.response?.status) {
      case 401:
        toast.error("Unauthorized! Please try to login again");
        break;
      case 403:
        toast.error("No permission to do this action");
        break;
      case 406:
        toast.error("Incorrect request flow! Please try again.");
        break;
      case 422:
        toast.error("Data not correct! Please try again or contact admin.");
        break;
      case 452:
        toast.error("Incorrect password! Please try again.");
        break;
      default:
        toast.error(error.message || "An error occurred");
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
