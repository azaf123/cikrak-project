import React, {useState} from "react";
import voucher from "../../data/ListVoucer";
import Modal from "../../components/Reedem/ModalVoucher";
import Points from "../../components/Reedem/CardPoint";
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

            <div className=" flex">
                <ProfileSidebar />
            <div>
            <div className="redeem-page font-bold  ">
            <Points/>
            </div>
            <section className="voucer ml-8 w-6/6 bg-white ">
                <div className="  text-2xl">
                <a href="./voucher" className=" float-right text-sm text-blue-700" >Browse More</a>   
                <h2 className=" font-bold">New Vouchers</h2>
                </div>
                <div className=" rounded-xl  m-4 p-2 bg-blue-100 shadow-inner   ">
            <div className=" grid grid-cols-3 m-2 ">
            {voucher.FoodBeverage.map((item,index)=>{
                return(
                    <div className=" my-2 cursor-pointer z-0 " key={index}> 
                        <div className="card rounded-xl w-56 m-8 h-72  p-2  shadow bg-white" onClick={() => getVoucher
                        (item.image, item.voucher, item.date, item.points)}>
                            <img src={item.image} className=" rounded-t-xl h-40" /> 
                            <div className="m-2">
                            <h3 className=" text-lg   ">{item.voucher}</h3> 
                            <h1 className=" text-sm absolute bottom-4 right-3"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</h1>   
                           </div>
                        </div>
                    </div>                            
                )
            })}
            </div>
        </div>
                {/* <div className="new-voucher row cursor-pointer mx-2 ">
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
                </div> */}
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
