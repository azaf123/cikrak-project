import React from "react";
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
        <section className="konten mx-20 my-2 bg-white "> 
            <div href="#" className="point inline-block mx-2 drop-shadow-lg my-3 p-6  bg-blue-50 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                <h5 className="mb-2 text-lg md:text-2xl  flex font-bold tracking-tight text-main-blue dark:text-white">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>  
                    {userData.points} 
                    <p className=" text-sm ">Points</p>
                </h5>
                <h5 className="text-sm md:text-lg text-gray-700 dark:text-gray-400">
                    There are vouchers waiting for you - 
                    <p onClick={GopayReedem} className="text-main-blue cursor-pointer">
                    Reedem now !</p>
                    </h5>
                </div>
                
                <div className=" gopay overflow-hidden h-300 shadow border-inherit rounded-md inline-block mx-2 p-2 drop-shadow-xl cursor-pointer	 ">
                    <h6 onClick={GopayReedem} className="text-xl text-black">
                        exchange to
                        <img className="w-24" src={gopay} alt="gopay-logo"/>
                    </h6>
            </div>
        </section>
        )
    }
    export default Points;