import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e, newPage = 1) => {
    e?.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await searchUsers({ ...form, page: newPage });
      setUsers(newPage === 1 ? data.items : [...users, ...data.items]);
      setPage(newPage);
    } catch {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="minRepos"
          type="number"
          placeholder="Min Repositories"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Status */}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 flex items-center gap-4"
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
                className="text-blue-500 text-sm"
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
          className="block mx-auto mt-6 bg-gray-800 text-white px-6 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
