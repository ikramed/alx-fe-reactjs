// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);        // لائحة المستخدمين
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [error, setError] = useState(false);     // حالة الخطأ
  const [page, setPage] = useState(1);           // الصفحة الحالية
  const [totalCount, setTotalCount] = useState(0); // عدد النتائج الكلي

  const handleSearch = async (event) => {
    event.preventDefault();

    // بحث جديد → رجع الصفحة لـ 1 وفرغ النتائج القديمة
    setPage(1);
    setError(false);
    setUsers([]);
    setTotalCount(0);

    await fetchUsers(1, true);
  };

  const fetchUsers = async (pageNumber = 1, isNewSearch = false) => {
    // ما نديروش request إلا كان كلشي inputs خاوي
    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const data = await searchUsers({
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(),
        page: pageNumber,
      });

      setTotalCount(data.total_count || 0);

      if (isNewSearch) {
        setUsers(data.items || []);
      } else {
        setUsers((prev) => [...prev, ...(data.items || [])]);
      }

      setPage(pageNumber);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    await fetchUsers(nextPage, false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow p-6">
      {/* فورم البحث المتقدم */}
      <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-3 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="e.g. Morocco"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Min Repositories
          </label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="md:col-span-3 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* حالة التحميل */}
      {loading && <p className="text-sm text-gray-600">Loading...</p>}

      {/* حالة الخطأ */}
      {error && !loading && (
        <p className="text-sm text-red-600">
          Looks like we cant find the user
        </p>
      )}

      {/* النتائج */}
      {!loading && !error && users.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">
            Found {totalCount} users
          </p>

          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 border rounded p-3"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 underline"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Load more */}
          {users.length < totalCount && (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="px-4 py-2 text-sm rounded border bg-gray-100 hover:bg-gray-200"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      )}

    
      {!loading && !error && users.length === 0 && totalCount === 0 && (
        <p className="text-sm text-gray-500">
          Enter at least one search criteria to find GitHub users.
        </p>
      )}
    </div>
  );
};

export default Search;
