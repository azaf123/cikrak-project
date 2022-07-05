import React, {useState} from "react";
import voucher from "../../data/ListVoucer";

import Modal from "./ModalVoucher";
import './card.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Card = ()=>{
    const [modal,setModal]= useState(false);
    const [tempVoucher, setTempvoucher]= useState([]);

    const getVoucher = (image,voucher,date,points)=>{
        let tempVoucher=[image,voucher,date,points];
        setTempvoucher(item=>[1,...tempVoucher]);
        return setModal(true);
    }

    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
return(
    <>
    
    <section className="konten mx-10 "> 
        <h4  className=" text-2xl font-bold mb-3 ">List Voucher</h4>
        <h6 className=" text-xl sticky mx-2 ">Food & Beverage</h6>
        <div className="w-12/12 rounded-2xl m-5 bg-blue-100">
        <Slider {...settings}>
            {voucher.FoodBeverage.map((item,index)=>{
                return(
                    <div className=" my-2 cursor-pointer z-0   " key={index}> 
                        <div className="card rounded-xl h-72 w-56 m-8   p-2  shadow bg-white" onClick={() => getVoucher
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
            </Slider>
            </div>
        {/* <div className=" case rounded-xl m-4  overflow-x-auto bg-blue-100 shadow-inner   ">
            <div className=" flex m-2 ">
            {voucher.FoodBeverage.map((item,index)=>{
                return(
                    <div className=" my-2 cursor-pointer z-0 " key={index}> 
                        <div className="card rounded-xl h-72 w-56 m-8   p-2  shadow bg-white" onClick={() => getVoucher
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
        </div> */}

        <h6 className=" text-xl sticky mx-2 top-0 ">Entertaiment</h6>
        <div className="w-12/12 rounded-2xl m-5 bg-slate-200 ">
        <Slider {...settings}>
            {voucher.Entertaiment.map((item,index)=>{
                return(
                    <div className=" m-auto  cursor-pointer z-0 " key={index}> 
                        <div className="card rounded-xl h-72 w-56 m-8   p-2  shadow bg-white" onClick={() => getVoucher
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
            </Slider>
        </div>

        <h6 className=" text-xl sticky mx-2 top-0 ">Healthy & Beauty</h6>
        <div className=" rounded-2xl bg-blue-100 m-5 ">
        <Slider {...settings}>
            {voucher.HealthyBeauty.map((item,index)=>{
                return(
                    <div className=" my-2 cursor-pointer z-0  " key={index}> 
                        <div className="card rounded-xl h-72 w-56 m-8   p-2  shadow bg-white" onClick={() => getVoucher
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
            </Slider>
            </div>
        


        {/* <h6 className="font-bold text-xl sticky mx-2 top-0 ">Food & Beverage</h6>
        <div className=" rounded-xl  ml-4  overflow-x-auto p-2 bg-blue-100 shadow-inner   ">
            <div className="flex m-2">
            {voucher.FoodBeverage.map((item,index)=>{
                return(
                    <div className="col-4 my-2 cursor-pointer z-0 " key={index}> 
                        <div className="card rounded-xl w-9/12  p-0  shadow bg-white" onClick={() => getVoucher
                        (item.image, item.voucher, item.date, item.points)}>
                            <img src={item.image} className="card-img-top rounded-t-xl h-40" /> 
                            <div className="card-body">
                                <h3 className="card-title text-xl   ">{item.voucher}</h3> 
                                <p className="card-text float-right text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</p>
                            </div>
                        </div>
                    </div>                            
                )
            })}
            </div>
            </div>
            
            <h6 className="font-bold text-xl sticky mt-6 mx-2 top-0 ">Entertaiment</h6>
            <div className="rounded-xl text-xl ml-4 bg-slate-50 p-2 overflow-x-scroll shadow-inner">
            
            <div className="flex m-2">
            {voucher.Entertaiment.map((item,index)=>{
                return(
                    <div className="col-4 my-2  z-0 " key={index}> 
                    <div className="card rounded-xl cursor-pointer inline-block w-9/12  p-0 overflow-hidden shadow bg-white" onClick={() => getVoucher
                    (item.image, item.voucher, item.date, item.points)}>
                        <img src={item.image} className="card-img-top h-40" /> 
                        <div className="card-body">
                            <h3 className="card-title text-xl">{item.voucher}</h3> 
                            <p className="card-text float-right text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
            </div>
            <h6 className="font-bold text-xl sticky mt-6 mx-2 top-0">Healthy&Beauty</h6>
            <div className="rounded-xl text-xl  ml-4 p-2 overflow-x-auto bg-blue-100 shadow-inner">
            
            <div className="flex m-2">
            {voucher.HealthyBeauty.map((item,index)=>{
                return(
                    <div className=" col-4 my-2 cursor-pointer z-0" key={index}> 
                        <div className="card rounded-xl inline-block w-9/12  p-0 overflow-hidden shadow bg-white" onClick={() => getVoucher
                        (item.image, item.voucher, item.date, item.points)}>
                            <img src={item.image} className="card-img-top h-40 " /> 
                            <div className="card-body">
                                <h3 className="card-title text-xl">{item.voucher}</h3> 
                                <p className="card-text float-right text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</p>
                            </div>
                        </div>
                    </div>                         
                )
            })}
            </div>
        </div> */}
        </section>
        {
            modal === true?<Modal image={tempVoucher[1]} voucher={tempVoucher[2]} date={tempVoucher[3]} points={tempVoucher[4]} hide={()=>setModal(false)}/>:''
        }
    
    </>
)
}
export default Card;
