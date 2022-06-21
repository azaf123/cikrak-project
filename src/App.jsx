import React, { useRef } from "react";
import Nav from "./components/Navbar/Nav";
import HeroImg from "./assets/Hero.png";
import ButtonFill from "./components/ButtonFill";
import ButtonOutline from "./components/ButtonOutline";
import Blog from "./components/Blog";
import img1 from "./assets/img1_1.jpg";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Icon1 from "./assets/icon-1.png";
import Icon2 from "./assets/icon-2.png";
import Icon3 from "./assets/icon-3.png";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from './components/scroll';
const App = () => {
  const commentSection = useRef(null);
  const blogsection1 = () =>
  window.scrollTo({
      top: commentSection.current.offsetTop,
      behavior: "smooth"
  }); 
  const Info = [
    {
      icon: Icon1,
      title: "Secret Locations",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon2,
      title: "Safe Adventure",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Professional Hikers",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  const contents = [
    {
      title: "Pick-up sampah",
      des: "The garbage pick-up service serves to make it easier for users to dispose of their household waste by exchanging points that can be exchanged for cash or vouchers.",
      img: img1,
    },
    {
      title: "E-commerce",
      des: "Exclusive buying and selling platform for recycled waste products and environmentally friendly products provided directly from UMKM and Cikrak.",
      img: img2,
    },
    {
      title: "Let’s Enjoy Nature With Us",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img3,
    },
  ];
  return (
    <div className="font-Poppins">
      {/* <Headers /> */}
      <section className="bg-Hero bg-cover bg-center  py-4 md:px-24 px-4">
      <Nav />
      <div className="flex md:flex-row flex-col gap-5 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
          >
            Changemakers, Let's Move and Innovate to Make Change!
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Let's start with small things, for example, throwing trash in its place.
          </p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill onClick={blogsection1}>Let’s Go</ButtonFill>
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
            <h1 className="font-semibold text-lg my-3">{info.title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{info.des}</p>
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
      <Blog content ={contents[0]} ref={commentSection} />
      <Blog content={contents[1]} alternative={true}/>
      <Blog content={contents[2]} />
      <Review />
      <Footer />
      <ScrollToTop />
    </div>
    
  );
};

export default App;