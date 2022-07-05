import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import { PrivateRoute } from "../components/PrivateRoute";
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
import HomeEdu from "../pages/HomeEducation";
import FirstEdu from "../pages/edu1";
import SecondEdu from "../pages/edu2";
import ThirdEdu from "../pages/edu3";
import AboutUs from "../pages/AboutUs";
import CardProfil from "../pages/ReedemVoucher";
import Voucher from "../pages/BrowseVoucher";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routing = () => {
  const { isLoggedIn } = useSelector((state) => state.register);

  return (
    <BrowserRouter>
      {isLoggedIn ? <NavBarAuth /> : <Nav />}
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/home-edu" element={<HomeEdu />} />
        <Route path="/edu1" element={<FirstEdu />} />
        <Route path="/edu2" element={<SecondEdu />} />
        <Route path="/edu3" element={<ThirdEdu />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
        <Route path="/redeem" element={<PrivateRoute><CardProfil /></PrivateRoute>} />
        <Route path="/voucher" element={<PrivateRoute><Voucher /></PrivateRoute>} />
        <Route path="/gopaypage" element={<PrivateRoute><GopayPage /></PrivateRoute>} />
        <Route path="/success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;