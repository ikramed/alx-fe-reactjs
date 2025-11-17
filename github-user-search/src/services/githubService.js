
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = "";

    if (username) {
      query += `${username} in:login`;
    }

    if (location) {
      if (query) query += " ";
      query += `location:${location}`;
    }

    if (minRepos) {
      if (query) query += " ";
      query += `repos:>=${minRepos}`;
    }

    if (!query) {
      return { items: [], total_count: 0 };
    }

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 10,
        page,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
