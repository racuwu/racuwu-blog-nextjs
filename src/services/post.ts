import axios from "axios";
import { API_URL } from "./config";

export const getAllPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const getHomeData = async () => {
    const response = await axios.get(`${API_URL}/home`);
    return response.data;
}