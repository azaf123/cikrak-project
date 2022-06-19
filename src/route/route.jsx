import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Profile from "../pages/Profile";
import History from "../pages/History";
import ChangePassword from "../pages/ChangePassword";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/changepwd" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}
