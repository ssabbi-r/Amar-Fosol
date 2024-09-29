import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderPage from "./buyer/HeaderPage";
import SearchProduct from "./buyer/SearchProduct";
import BuyerProfile from "./buyer/BuyerProfile"; // Import BuyerProfile component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/buyer/search" element={<SearchProduct />} />
        <Route path="/buyer/profile" element={<BuyerProfile />} /> {/* Add profile route */}
      </Routes>
    </Router>
  );
}

export default App;
