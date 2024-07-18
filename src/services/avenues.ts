import axios from "axios";
import { API_URL } from "./config";

export const getAllAvenues = async () => {
  const response = await axios.get(`${API_URL}/avenues`);
  return response.data;
};