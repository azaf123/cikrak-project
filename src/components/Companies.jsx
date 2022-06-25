import React from "react";
import com1 from "../assets/com-1.png";
import com2 from "../assets/com-2.png";
import com3 from "../assets/com-3.png";
const Companies = () => {
  return (
    <section className="text-center -z-20">
      <h1 className="md:text-3xl text-xl font-semibold">
      Supported By
      </h1>
      <div
        className="flex justify-center flex-wrap md:w-2/3 my-16 mx-auto gap-x-20
      md:gap-y-12 gap-y-8"
      >
        <img src={com1} alt="logo" className="h-20" />
        <img src={com2} alt="logo" className="h-20" />
        <img src={com3} alt="logo" className="h-20" />
      </div>
    </section>
  );
};

export default Companies;
