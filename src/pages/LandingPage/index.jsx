import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
// components
import ButtonFill from '../../components/ButtonFill/ButtonFill';
import Companies from '../../components/Companies/Companies';
import Review from '../../components/Review/Review';
import Footer from '../../components/Footer/Footer';
import { ScrollToTop } from '../../components/scroll';
import { FormModal } from '../../components/FormModal';
import { EcommerceModal } from '../../components/EcommerceModal';
import { WaButton } from '../../components/WaButton';

import Blog from '../../components/Blog';
// data
import Info from '../../data/Info';
import Contents from '../../data/Content';
// assets
import HeroImg from '../../assets/Hero.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalComingSoon, setOpenModalComingSoon] = useState(false);
  const commentSection = useRef(null);
  const { isLoggedIn } = useSelector((state) => state.register);
  return (
    <div className="font-Poppins">
      <section className="bg-Hero bg-cover bg-center  py-4 md:px-24 px-4">
        <div className="flex md:flex-row flex-col gap-5 pt-20">
          <div className="flex-1">
            <h1
              className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
            >
              Changemakers, Let's Move and Innovate to Make Change!
            </h1>
            <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
              Let's start with small things, for example, throwing trash in its
              place.
            </p>
            <br />
            <div className="flex md:gap-4 gap-2 flex-wrap">
              {/* <div onClick={() => setOpenModal(true)}></div> */}
              <Link to="/login">
                <ButtonFill>Let’s Go</ButtonFill>
              </Link>
            </div>
          </div>
          <div className="flex-1  flex justify-center">
            <img src={HeroImg} alt="hero" className="h-2/3" />
          </div>
        </div>

        {/* Information card */}
        <div className="bg-white shadow-2xl flex md:flex-row flex-col gap-10 md:p-14 p-10 mt-5 rounded-md">
          {Info.map((info, i) => (
            <div key={i}>
              <img src={info.icon} alt="icon" className="h-16" />
              <h1 className="font-semibold text-lg my-3">{info.title}</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {info.des}
              </p>
            </div>
          ))}
        </div>
        <p className="py-10 md:text-sm text-xs block text-gray-600 text-center">
          Don't hesitate to contact us for better waste management Information.
          <span className="text-lightprimary font-semibold italic px-1">
            KEEP NATURE WITH CIKRAK.
          </span>
        </p>
      </section>
      <Companies />
      <Blog
        content={Contents[0]}
        ref={commentSection}
        form={true}
        setOpenModal={setOpenModal}
      />
      <Blog
        content={Contents[1]}
        alternative={true}
        comimgSoon={true}
        setOpenModalComingSoon={setOpenModalComingSoon}
      />
      <Blog content={Contents[2]} education={true} />
      <Review />
      <Footer />
      <WaButton />
      <ScrollToTop />
      <FormModal
        open={isLoggedIn && openModal}
        onClose={() => setOpenModal(false)}
      />
      <EcommerceModal
        open={openModalComingSoon}
        onClose={() => setOpenModalComingSoon(false)}
      />
    </div>
  );
};

export default LandingPage;
