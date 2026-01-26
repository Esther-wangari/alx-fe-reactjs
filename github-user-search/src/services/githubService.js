import axios from "axios";

const API_URL = "https://api.github.com/search/users";

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(API_URL, {
    params: {
      q: query,
      per_page: 10,
      page
    },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  return response.data;
};
