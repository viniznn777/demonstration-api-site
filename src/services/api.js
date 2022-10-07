import axios from "axios";

const api = axios.create({
  baseURL: "https://apivalorantgame.herokuapp.com/info",
});

export default api;
