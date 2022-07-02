import React, {useState} from "react";
import voucher from "../../data/data";
import Modal from "../../components/card/modal";
import Points from "../../components/card/points";
import NavBarAuth from "../../components/Navbar";
import ProfileSidebar from "../../components/ProfileSidebar";


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
            <NavBarAuth />
            <div className="flex">
                <ProfileSidebar />
            <div>
            <div className=" font-bold mt-20 ml-16 pb-4 text-main-blue">
            <Points/>
            </div>
            
        
            <section className="container mx-16 w-5/6 ">
                <div className="text-xl">
                <a href="./voucher" className=" float-right" >Browse More</a>   
                <h2 className="text-">New Vouchers</h2>
                </div>
                <div className="new-voucher row cursor-pointer mx-2 my-3 ">
                    {voucher.FoodBeverage.map((item,index)=>{
                        return(
                            <div className="col-6 my-4 float-left" key={index}> 
                                <div className=" rounded-xl inline-block p-0 overflow-hidden h-300 shadow " 
                                onClick={() => getVoucher(item.image, item.voucher, item.date, item.points)}>
                                    <img src={item.image} /> 
                                    <div className="card-body mx-2">
                                        <h3 className="card-title text-lg">{item.voucher}</h3> 
                                        <p className="card-text float-right ">{item.points}</p>
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
