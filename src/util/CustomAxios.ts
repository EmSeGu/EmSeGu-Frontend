import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://172.20.10.8:8082/",
  headers: {},
});

export default CustomAxios;
