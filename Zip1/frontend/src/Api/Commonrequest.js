import axios from "axios";

export const commonrequest = async (method, url, body, header, auth) => {
  const adminToken =
    localStorage.getItem("adminToken") || localStorage.getItem("token");
  const userToken = localStorage.getItem("userToken");

  const config = {
    method,
    url,
    headers: {},
    data: body,
  };

  if (auth === "admin" && adminToken) {
    config.headers.Authorization = adminToken;
  }

  if (auth === "user" && userToken) {
    config.headers.Authorization = userToken;
  }

  config.headers["Content-Type"] = header
    ? "multipart/form-data"
    : "application/json";

  try {
    return await axios(config);
  } catch (error) {
    console.error("API Error:", error);
    return error.response;
  }
};
