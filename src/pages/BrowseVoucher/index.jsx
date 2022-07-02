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
          
          <a href="/redeem"><FontAwesomeIcon icon={faAngleLeft} className="back text-sky-500 fa-2x mx-10 float-left "/></a>
          <Points/>
          <Card/>
        </div>
        </>
      );
    }
export default Voucher;