// src/App.jsx
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            GitHub User Search
          </h1>
          <p className="text-gray-500 text-sm">
            Search for GitHub users and view their profiles.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <Search />
      </main>
    </div>
  );
}

export default App;
