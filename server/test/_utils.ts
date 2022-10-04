import _axios from "axios";

export const axios = _axios.create({ baseURL: "http://localhost:8080/trpc" });
axios.interceptors.response.use(function (response) {
  return response.data.result.data.json;
});
