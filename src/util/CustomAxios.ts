import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://192.168.0.18:8082/",
  headers: {},
});

export default CustomAxios;
