import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeDetail from "./components/RecipeDetail"; 
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 style={{ textAlign: "center" }}>🍳 Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:title" element={<EditRecipeForm />} />
          <Route path="/recipe/:title" element={<RecipeDetail />} /> {/* ✅ أضفنا هذا */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
