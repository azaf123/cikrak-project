import React, {useState} from "react";
import voucher from "../../data/data";
import Modal from "../../components/card/modal";
import Points from "../../components/card/points";
import NavBarAuth from "../../components/Navbar/NavBarAuth";
import ProfileSidebar from "../../components/ProfileSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'


const CardProfil = ()=>{
    const [modal,setModal]= useState(false);
    const [tempVoucher, setTempvoucher]= useState([]);

    const getVoucher = (image,voucher,date,points)=>{
        let tempVoucher=[image,voucher,date,points];
        setTempvoucher(item=>[1,...tempVoucher]);
        return setModal(true);
    }

    return(
        <>

            <div className="flex">
                <ProfileSidebar />
            <div>
            <div className=" font-bold mt-20 ml-16 pb-4 ">
            <Points/>
            </div>
            <section className=" mx-16 w-5/6 bg-white ">
                <div className="text-2xl">
                <a href="./voucher" className=" float-right text-sm text-blue-700" >Browse More</a>   
                <h2 className=" font-bold">New Vouchers</h2>
                </div>
                <div className="new-voucher row cursor-pointer mx-2 ">
                    {voucher.FoodBeverage.map((item,index)=>{
                        return(
                            <div className="col-6 my-2 float-left " key={index}> 
                                <div className=" rounded-xl bg-blue-200 p-2 inline-block  overflow-hidden h-300 shadow " 
                                onClick={() => getVoucher(item.image, item.voucher, item.date, item.points)}>
                                    <img src={item.image} /> 
                                    <div className="card-body mb-3">
                                        <h3 className="card-title text-lg">{item.voucher}</h3> 
                                        <div className="poin  float-right ">
                                        <p className="card-text  "><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        )
                    })}
                </div>
            </section>
        {
            modal === true?<Modal image={tempVoucher[1]} voucher={tempVoucher[2]} date={tempVoucher[3]} points={tempVoucher[4]} hide={()=>setModal(false)}/>:''
        }
        </div>
  </div>
</>
    )
}    
    export default CardProfil;
