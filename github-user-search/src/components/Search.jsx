import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e, newPage = 1) => {
    e?.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData({
        ...formData,
        page: newPage,
      });

      setUsers(newPage === 1 ? data.items : [...users, ...data.items]);
      setPage(newPage);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <input
          type="text"
          name="username"
          placeholder="GitHub username"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Kenya)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="minRepos"
          placeholder="Minimum repositories"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {/* States */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && (
        <button
          onClick={() => handleSearch(null, page + 1)}
          className="block mx-auto mt-6 bg-gray-200 px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;

import Search from "./components/Search";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <p>Search for GitHub profiles using the GitHub API</p>
      <Search />
    </div>
    );
}