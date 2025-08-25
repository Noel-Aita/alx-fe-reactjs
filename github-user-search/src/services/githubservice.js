import axios from "axios";

const API_URL = "https://api.github.com";

export const searchUsers = async (username) => {
  const response = await axios.get(`${API_URL}/search/users`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
    params: { q: username },
  });
  return response.data;
};
