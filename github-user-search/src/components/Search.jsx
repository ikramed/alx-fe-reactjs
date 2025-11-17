
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);      
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false);     

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="px-4 py-2 border rounded bg-black text-white"
        >
          Search
        </button>
      </form>

      
      {loading && <p>Loading...</p>}

      
      {error && !loading && (
        <p>Looks like we cant find the user</p>
      )}

      
      {user && !loading && !error && (
        <div className="border rounded p-4 flex items-center gap-4">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="font-bold text-lg">
              {user.name ? user.name : user.login}
            </h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
