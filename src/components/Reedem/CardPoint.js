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
        <>
            <section className="konten mx-10 my-2 bg-white "> 
            
            <h4 className="reedem text-2xl   "> Reedem Points</h4>

                <a href="#" className="point inline-block mx-2 drop-shadow-lg my-3 p-6  bg-blue-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>  {userData.points} <pa className=" text-black text-sm">Points</pa></h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">There are vouchers waiting for you - 
                            <a onClick={GopayReedem} className="text-blue-700 cursor-pointer">Reedem now !</a></p>
                </a>
                
                <div className=" gopay overflow-hidden h-300 shadow border-inherit rounded-md inline-block mx-2 p-2 drop-shadow-xl cursor-pointer	 ">
                    <h6 onClick={GopayReedem} className="text-xl text-black">
                        exchange to
                        <img className="w-24" src={gopay} alt="gopay-logo"/>
                        </h6>
                </div>
            </section>
        </>
        )
    }
    export default Points;

    {/* <div className=" point  bg-blue-100 rounded-xl inline-block mx-2 drop-shadow-lg my-3">                 
                    <div className="card-body w-60 text-2xl ">
                        <h4 className=" text-black "><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>  {userData.points} <pa className=" text-black text-sm">Points</pa></h4>
                    </div> 
                    <div class="w-3/4  mx-auto mb-3 ">
                        <h1 className="text-sm text-black ">There are vouchers waiting for you - 
                        <a onClick={GopayReedem} className="text-blue-700 cursor-pointer">Reedem now !</a></h1>   
                    </div>
                </div> */}