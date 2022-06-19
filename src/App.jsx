import Blog from "./components/Blog";
import Headers from "./components/Header";
import img1 from "./assets/img1_1.jpg";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";
const App = () => {
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
      <Headers />
      <Companies />
      <Blog content={contents[0]} />
      <Blog content={contents[1]} alternative={true}/>
      <Blog content={contents[2]} />
      <Review />
      <Footer />
    </div>
  );
};

export default App;