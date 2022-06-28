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
        {/* TODO: make / display Profile component too */}
        <Route path="/profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}
