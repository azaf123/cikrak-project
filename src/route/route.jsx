import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Profile from "../pages/Profile";
import History from "../pages/History";
import ChangePassword from "../pages/ChangePassword";
import ProfileLayout from "../components/ProfileLayout";

export default function Routing() {
  return (
    <Router>
      <Routes>
        {/* TODO: make / display Profile component too */}
        <Route path="/" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="changepwd" element={<ChangePassword />} />
        </Route>
      </Routes>
    </Router>
  );
}