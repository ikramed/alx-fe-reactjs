
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
