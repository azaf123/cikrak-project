import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Profile from "../pages/Profile";
import History from "../pages/History";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}
