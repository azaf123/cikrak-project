import React, {useState} from "react";
import voucher from "./data/data";
import Modal from "./card/modal";
import Points from "./card/points";
import Exchange from "./card/exchange";

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
        <div>
            <Points/>
            
        </div>
        
        <section className="container ">
            <div>
            <a href="./voucher" className=" float-right">Browse More</a>
            <h4  className="text-sky-400">New Vouchers</h4>
            </div>
            <div className="row  mx-2 my-3 bg-blue-200 rounded-lg h-100 shadow cursor-pointer	">
                {voucher.FoodBeverage.map((item,index)=>{
                    return(
                        <div className=" col-4 mx-auto my-4 " key={index}> 
                            <div className=" bg-white rounded-xl inline-block p-0 overflow-hidden h-100 shadow " 
                            onClick={() => getVoucher(item.image, item.voucher, item.date, item.points)}>
                                <img src={item.image} /> 
                                <div className="card-body">
                                    <h6 className="card-title">{item.voucher}</h6> 
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
        </>
    )
}    
    export default CardProfil;
