import React from "react";
import user from "../data/user"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faStar} from '@fortawesome/free-solid-svg-icons'
import gopay from '../data/image/gopay.png'

const Points=()=>{
    return(
        <>
            <section className=" container my-10 "> 
            <h4 className="text-sky-500"> Reedem Points</h4>
                {user.admin.map((item,index)=>{
                    return(
                        <div className=" point  bg-blue-100 rounded-xl inline-block mx-2 drop-shadow-lg " key={index}>                 
                            <div className="card-body w-60 ">
                                <h4 className=" text-blue-500 "><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>   {item.point} <pa className="text-sm text-black">Points</pa></h4>
                            </div> 
                            <div class="w-3/4 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mx-auto mb-3 ">
                                <div class="bg-blue-600 h-2.5 rounded-full w-3/4"></div>   
                            </div>
                        </div>  
                    )
                })}
                <div className=" gopay bg-white border-inherit rounded-md inline-block mx-6 p-2 drop-shadow-lg cursor-pointer	 ">
                    <h6>
                        exchange to
                        <img className="w-24" src={gopay}/></h6>
                </div>
            </section>
        </>
        )
    }
    export default Points;