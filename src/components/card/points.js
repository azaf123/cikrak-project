import React from "react";
import user from "../../data/user"
import { useSelector } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import gopay from '../../assets/gopay.png'
import Swal from 'sweetalert2'


function Points() {
    const { userData } = useSelector((state) => state.user);
  
    function GopayReedem(){
        Swal.fire('This feature is coming soon')

    }
    return(
        <>
            <section className="konten mx-10 my-2 bg-white "> 
            <h4 className="reedem text-2xl   "> Reedem Points</h4>
                <div className=" point  bg-blue-100 rounded-xl inline-block mx-2 drop-shadow-lg my-3">                 
                    <div className="card-body w-60 text-2xl ">
                        <h4 className=" text-black "><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>  {userData.points} <pa className=" text-black text-sm">Points</pa></h4>
                    </div> 
                    <div class="w-3/4  mx-auto mb-3 ">
                        <h1 className="text-sm text-black ">There are vouchers waiting for you - 
                        <a onClick={GopayReedem} className="text-blue-700 cursor-pointer">Reedem now !</a></h1>   
                    </div>
                </div>

                <div className=" gopay overflow-hidden h-300 shadow border-inherit rounded-md inline-block mx-2 p-2 drop-shadow-xl cursor-pointer	 ">
                    <h6 onClick={GopayReedem} className="text-xl text-black">
                        exchange to
                        <img className="w-24" src={gopay}/>
                        </h6>
                </div>
            </section>
        </>
        )
    }
    export default Points;