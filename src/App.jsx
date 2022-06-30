import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Profile from "./pages/Profile";
import History from "./pages/History";
import ChangePassword from "./pages/ChangePassword";
import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import NavAcc from "./components/NavbarAccount/Nav";
import HeroImg from "./assets/Hero.png";
import ButtonFill from "./components/ButtonFill";
import ButtonOutline from "./components/ButtonOutline";
import img1 from "./assets/img1_1.jpg";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Icon1 from "./assets/icon-1.png";
import Icon2 from "./assets/icon-2.png";
import Icon3 from "./assets/icon-3.png";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from "./components/scroll";
import { FormModal } from "./components/FormModal";
// import { PaymentModal } from './components/PaymentModal';
// import { AgreementModal } from './components/AgreementModal';
// import { SuccessModal } from './components/SuccessModal';
// import { GopayModal } from './components/GopayModal';
import { EcommerceModal } from "./components/EcommerceModal";
import { WaButton } from "./components/WaButton";
import { PaymentPage } from "./pages/PaymentPage";
import NotFound from "./pages/NotFound/index.tsx";
import HomeEdu from "./education/homeEducation";
import FirstEdu from "./education/edu1";
import SecondEdu from "./education/edu2";
import ThirdEdu from "./education/edu3";
import CardProfil from "./pages/ReedemVoucher";
import Voucher from "./pages/BrowseVoucher";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/loginSlice";

const App = () => {
  const { loginData, isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openModalComingSoon, setOpenModalComingSoon] = useState(false);
  const commentSection = useRef(null);
  // const blogsection1 = () =>
  // window.scrollTo({
  //     top: commentSection.current.offsetTop,
  //     behavior: "smooth"
  // });
  const Info = [
    {
      icon: Icon1,
      title: "Pick-up by Location",
      des: "Users can choose a location based on their respective addresses in the pick-up form.",
    },
    {
      icon: Icon2,
      title: "Exchange Trash For Money",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Exchange Trash With Vouchers",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  const contents = [
    {
      title: "Waste Pick-Up",
      des: "The garbage pick-up service serves to make it easier for users to dispose of their household waste by exchanging points that can be exchanged for cash or vouchers.",
      img: img1,
    },
    {
      title: "E-commerce",
      des: "Exclusive buying and selling platform for recycled waste products and environmentally friendly products provided directly from UMKM and Cikrak.",
      img: img2,
    },
    {
      title: "Education",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img3,
    },
  ];
  const Blog = ({ content, alternative, form, comimgSoon }) => {
    function openForm() {
      setOpenModal(true);
    }

    function openComingSoon() {
      setOpenModalComingSoon(true);
    }
    return (
      <section
        className={`flex ${
          alternative ? "md:flex-row-reverse" : "md:flex-row"
        } flex-col gap-6 py-12 md:px-28 px-6 items-center`}
      >
        <div className="flex-1">
          <img
            src={content.img}
            alt="img"
            className="md:h-[500px] h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="md:text-5xl font-semibold md:leading-snug text-3xl leading-normal">
            {content.title}
          </h1>
          <p className="text-sm text-gray-600 md:w-2/3 leading-relaxed py-5">
            {content.des}
          </p>
          <div
            onClick={form ? openForm : comimgSoon ? openComingSoon : undefined}
          >
            <ButtonFill>Find Out More</ButtonFill>
          </div>
        </div>
      </section>
    );
  };
  return (
      <BrowserRouter>
        {/* LEONA: moved nav here */}
        {isLoggedIn ? <NavAcc /> : <Nav/>}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="font-Poppins">
                {/* <Headers /> */}
                {/* <Nav /> */}
                {/* <NavAcc /> */}
                <section className="bg-Hero bg-cover bg-center  py-4 md:px-24 px-4">
                  <div className="flex md:flex-row flex-col gap-5 pt-20">
                    <div className="flex-1">
                      <h1
                        className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
                      >
                        Changemakers, Let's Move and Innovate to Make Change!
                      </h1>
                      <p
                        className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed"
                        onClick={() => setOpenModal(true)}
                      >
                        Let's start with small things, for example, throwing
                        trash in its place.
                      </p>
                      <br />
                      <div className="flex md:gap-4 gap-2 flex-wrap"> 
                        <div onClick={() => setOpenModal(true)}>
                          <ButtonFill>Let’s Go</ButtonFill>
                        </div>
                        <ButtonOutline />
                      </div>
                    </div>
                    <div className="flex-1  flex justify-center">
                      <img src={HeroImg} alt="hero" className="h-2/3" />
                    </div>
                  </div>

                  <div className="bg-white shadow-2xl flex md:flex-row flex-col md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md">
                    {Info.map((info, i) => (
                      <div key={i}>
                        <img src={info.icon} alt="icon" className="h-16" />
                        <h1 className="font-semibold text-lg my-3">
                          {info.title}
                        </h1>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {info.des}
                        </p>
                        <button className="text-rose-600 font-medium text-sm my-1">
                          Read More
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="py-10 md:text-sm text-xs block text-gray-600 text-center">
                    Don’t hesitate to contact us to get better Information.
                    <span className="text-rose-600 font-semibold italic px-1">
                      EXPLORE ALL TREKKING.
                    </span>
                  </p>
                </section>
                <Companies />
                <Blog content={contents[0]} ref={commentSection} form={true} />
                <Blog
                  content={contents[1]}
                  alternative={true}
                  comimgSoon={true}
                />
                <Blog content={contents[2]} />
                <Review />
                <Footer />
                <WaButton />
                <ScrollToTop />
                <FormModal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                />
                {/* <AgreementModal /> */}
                {/* <SuccessModal /> */}
                {/* <GopayModal /> */}
                <EcommerceModal
                  open={openModalComingSoon}
                  onClose={() => setOpenModalComingSoon(false)}
                />
              </div>
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/home-edu" element={<HomeEdu />} />
          <Route path="/edu1" element={<FirstEdu />} />
          <Route path="/edu2" element={<SecondEdu />} />
          <Route path="/edu3" element={<ThirdEdu />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/redeem" element={<CardProfil />} />
          <Route path="/voucher" element={<Voucher />} />
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;
