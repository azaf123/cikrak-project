import React from "react";
import user from "../data/user"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faStar} from '@fortawesome/free-solid-svg-icons'

const Points=()=>{
    return(
        <>
            <FontAwesomeIcon icon={faAngleLeft} className="text-sky-400 fa-2x mx-10 float-left "/>
            <section className=" container my-10 "> 

            <h4 className="text-sky-400"> Reedem Points</h4>
                {user.admin.map((item,index)=>{
                    return(
                        
                        <div className="  bg-blue-100 rounded-xl inline-block mx-2 " key={index}>
                                            
                            <div className="card-body 	 ">
                                <h5 className="point text-blue-400 "><FontAwesomeIcon icon={faStar} className="text-yellow-400"/>   {item.point} <p className="float-right text-sm text-black">Points</p></h5>
                            </div> 
                        </div>  
                    )
                })}
            </section>
        </>
        )
    }
    export default Points;