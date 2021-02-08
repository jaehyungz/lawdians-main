import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.88.0.210:5500",
});

export default instance;
