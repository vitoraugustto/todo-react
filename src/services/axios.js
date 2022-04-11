import axios from "axios";
import { BACKEND_BASE_URL } from "../config/api";

const JSON_HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const API_INSTANCE = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: JSON_HEADER,
});
