import React from "react";
import Card from "../../components/card/card";
import Points from "../../components/card/points";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import NavBarAuth from "../../components/Navbar";

const Voucher = ()=>{
    return (
      <><NavBarAuth />
        <div>
          <div  className=" font-bold pb-4 ">
          <a href="/redeem"><FontAwesomeIcon icon={faAngleLeft} className="back text-sky-500 fa-2x mx-2 float-left "/></a>
          <Points  /></div>

          <Card/>
        </div>
        </>
      );
    }
export default Voucher;