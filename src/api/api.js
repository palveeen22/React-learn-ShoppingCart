import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  // baseURL: process.env.REACT_APP_API + "/api",
});

export default instance;
