import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "",
  headers: {},
});

export default CustomAxios;
