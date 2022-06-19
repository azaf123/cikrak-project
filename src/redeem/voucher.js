import React from "react";
import Card from "./card/card";
import Points from "./card/points";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'


const Voucher = ()=>{
    return (
        <div><Points/>
          <Card
          ></Card>
        </div>
      );
    }
export default Voucher;