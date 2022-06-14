import axios from "axios";

export const instance = axios.create({
  baseURL: "http://coffee-shop-demo-v1.herokuapp.com",
});
