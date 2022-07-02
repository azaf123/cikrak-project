import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import CardProfil from "./pages/ReedemVoucher";
import Voucher from "./pages/BrowseVoucher";


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardProfil />} />
        <Route path="/voucher" element={<Voucher />} />
      </Routes>
    </Router>
  );
}