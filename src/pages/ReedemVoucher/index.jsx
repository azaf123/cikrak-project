import React, {useState} from "react";
import voucher from "../../data/ListVoucher";
import Modal from "../../components/Reedem/ModalVoucher";
import Points from "../../components/Reedem/CardPoint";
import ProfileSidebar from "../../components/ProfileSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'


const RedeemVoucher = ()=>{
    const [modal,setModal]= useState(false);
    const [tempVoucher, setTempvoucher]= useState([]);

    const getVoucher = (image,voucher,date,points)=>{
        let tempVoucher=[image,voucher,date,points];
        setTempvoucher(item=>[1,...tempVoucher]);
        return setModal(true);
    }

    const mapFood = () => {
        return voucher.FoodBeverage.map((item,index)=> (
            <div className=" my-2 cursor-pointer z-0   " key={index}> 
                <div className="card rounded-xl md:h-72 md:w-56 w-40 mx-auto md:m-5   p-2    shadow-inner  bg-blue-50" onClick={() => getVoucher
                    (item.image, item.voucher, item.date, item.points)}>
                    <img src={item.image} className=" rounded-t-xl xl:full" /> 
                    <div className="m-2">
                        <h3 className="xl:text-lg md:text-sm">{item.voucher}</h3> 
                        <h1 className="xl:text-sm md:block hidden absolute bottom-4 right-3"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</h1>   
                     </div>
                </div>
            </div>                            
            )    
        )}

    return(
        <>
        <div className="flex">
           <ProfileSidebar/>
            
            <div className="redeem">
                <div className="redeem-page py-10  ">
                <h4 className="reedem text-2xl mx-10 md:mx-20 font-bold text-main-blue "> Reedem Points</h4>
                    <Points />
                </div>
            <div className="voucer mx-10 md:mx-20 w-5/6 bg-white ">
                <div className="  text-2xl">
                    <a href="./voucher" className=" float-right text-sm m-10 md:m-0 text-main-blue" >Browse More</a>   
                    <h2 className=" font-bold">New Vouchers</h2>
                </div>
                <div className=" rounded-xl w-2/2 m-4 p-2 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {mapFood()}
                    </div>
                </div>
            </div>
        {
            modal === true?<Modal image={tempVoucher[1]} voucher={tempVoucher[2]} date={tempVoucher[3]} points={tempVoucher[4]} hide={()=>setModal(false)}/>:''
        }
        </div>
  </div>
</>
    )
}    
    export default RedeemVoucher;
