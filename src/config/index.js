import axios from "axios";
import config from "config/APIEndpoints";

const BASE_API_URL = config.getEndpoint();
const ADMIN_API_URL = BASE_API_URL + "/api/v1";
const STARGAZE_ENDPOINT = BASE_API_URL + "/api/v1/app/stargaze/";

export { BASE_API_URL };

export const feBaseLink = {
  applicationForm: "https://apply.caarya.life/",
};

// Util
export const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
};

export const getMultipartHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "content-type": "multipart/form-data",
    },
  };
};

export const instance = axios.create({
  baseURL: ADMIN_API_URL,
});

export const stargazeInstance = axios.create({
  baseURL: STARGAZE_ENDPOINT,
});

export const refreshToken = () =>
  instance.get("admin/dashboard/token", getHeader());
