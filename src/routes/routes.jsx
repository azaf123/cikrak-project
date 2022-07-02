import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import Nav from "../components/Navbar/Nav";
import NavBarAuth from "../components/Navbar/NavBarAuth";
// pages
import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Profile";
import History from "../pages/History";
import ChangePassword from "../pages/ChangePassword";
import { PaymentSuccess } from "../pages/PaymentSuccess";
import { PaymentPage } from "../pages/PaymentPage";
import { GopayPage } from "../pages/GopayPage";
import NotFound from "../pages/NotFound/index.tsx";
import HomeEdu from "../pages/homeEducation";
import FirstEdu from "../pages/edu1";
import SecondEdu from "../pages/edu2";
import ThirdEdu from "../pages/edu3";
import AboutUs from "../pages/AboutUs";
import CardProfil from "../pages/ReedemVoucher";
import Voucher from "../pages/BrowseVoucher";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routing = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
        {isLoggedIn ? <NavBarAuth /> : <Nav />}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/home-edu" element={<HomeEdu />} />
          <Route path="/edu1" element={<FirstEdu />} />
          <Route path="/edu2" element={<SecondEdu />} />
          <Route path="/edu3" element={<ThirdEdu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/redeem" element={<CardProfil />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/gopaypage" element={<GopayPage />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Routing;