import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import CardProfil from "./redeem/cardprofil";
import Voucher from "./redeem/voucher";


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