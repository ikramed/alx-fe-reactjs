
import axios from "axios";


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += (query ? " " : "") + `location:${location}`;
    if (minRepos) query += (query ? " " : "") + `repos:>=${minRepos}`;

    if (!query) return { items: [], total_count: 0 };
 
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
