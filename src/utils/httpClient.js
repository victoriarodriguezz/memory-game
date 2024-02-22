import axios from "axios";

const config = {
  baseURL: "https://fed-team.modyo.cloud/",
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