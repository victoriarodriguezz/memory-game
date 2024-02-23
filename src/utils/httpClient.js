import axios from "axios";

const apiUrl = process.env.REACT_APP_MODYO_API_URL;
const config = {
  baseURL: apiUrl,
  timeout: 60000,
};

const httpClient = axios.create(config);
httpClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default httpClient;