import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://192.168.183.31:8082/",
  headers: {
    Authorization: localStorage.getItem("accessToken"),
  },
});

export default CustomAxios;
