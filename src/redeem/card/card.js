import React, {useState} from "react";
import voucher from "../data/data";
import Modal from "./modal";
import './card.css'


const Card = ()=>{
    const [modal,setModal]= useState(false);
    const [tempVoucher, setTempvoucher]= useState([]);

    const getVoucher = (image,voucher,date,points)=>{
        let tempVoucher=[image,voucher,date,points];
        setTempvoucher(item=>[1,...tempVoucher]);
        return setModal(true);
    }
return(
    <>
    
    <section className="container "> 
        <h4  className="text-sky-400">List Voucher</h4>
        <div className="row  mx-2 my-3 bg-blue-50 rounded-lg h-100 shadow">
            <h6>Food & Beverage</h6>
            {voucher.FoodBeverage.map((item,index)=>{
                return(
                    <div className=" col-4 mx-auto my-4" key={index}> 
                        <div className="rounded-xl inline-block p-0 overflow-hidden h-100 shadow " 
                        onClick={() => getVoucher(item.image, item.voucher, item.date, item.points)}>
                            <img src={item.image} /> 
                            <div className="card-body">
                                <h6 className="card-title">{item.voucher}</h6> 
                                <p className="card-text">{item.date}</p>
                            </div>
                        </div>
                    </div>                    
                )
            })}
            </div>
            <div className="row  mx-2">
            <h6>Entertaiment</h6>
            {voucher.Entertaiment.map((item,index)=>{
                return(
                    <div className=" col-4 mx-auto my-4 " key={index}> 
                        <div className="rounded-xl inline-block  p-0 overflow-hidden shadow  " onClick={() => getVoucher
                        (item.image, item.voucher, item.date, item.points)}>
                        <img src={item.image} className="card-img-top" /> 
                        <div className="card-body">
                        <h6 className="card-title">{item.voucher}</h6> 
                        <p className="card-text">{item.date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="row  mx-2 bg-blue-50">
            <h6>Healthy&Beauty</h6>
            {voucher.HealthyBeauty.map((item,index)=>{
                return(
                    <div className="col-4 my-4" key={index}> 
                        <div className="rounded-xl inline-block   p-0 overflow-hidden h-100 shadow" onClick={() => getVoucher
                        (item.image, item.voucher, item.date, item.points)}>
                            <img src={item.image} className="card-img-top" /> 
                            <div className="card-body">
                                <h6 className="card-title">{item.voucher}</h6> 
                                <p className="card-text">{item.date}</p>
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
export default Card;
