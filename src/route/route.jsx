import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {render} from '@testing-library/react'
// pages
import Profile from "../pages/Profile";
import History from "../pages/History";
import ChangePassword from "../pages/ChangePassword";

const Providers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

const customRender = (ui, options) => {
  render(ui, {wrapper: Providers, ...options})
}

// // re-export everything
// export * from '@testing-library/react'

// // override render method
// export {customRender as render}
