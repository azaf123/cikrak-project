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
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 3
        };

    const mapFood = () => {
        return voucher.FoodBeverage.map((item,index)=> (
            <div className=" my-2 cursor-pointer z-0   " key={index}> 
                <div className="card rounded-xl md:h-64 md:w-48 w-48 mx-auto md:m-8   p-2  shadow bg-white" onClick={() => getVoucher
                    (item.image, item.voucher, item.date, item.points)}>
                    <img src={item.image} className="  rounded-t-xl xl:full" /> 
                    <div className="m-2">
                        <h3 className="xl:text-lg md:text-sm">{item.voucher}</h3> 
                        <h1 className="xl:text-sm md:block hidden absolute bottom-4 right-3"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</h1>   
                     </div>
                </div>
            </div>                            
            )    
        )}
    
    const mapEntertaiment=()=>{
        return voucher.Entertaiment.map((item,index)=>(
            <div className="m-auto cursor-pointer z-0 " key={index}> 
                <div className="card rounded-xl md:h-64 md:w-48 w-48 mx-auto md:m-8  p-2  shadow bg-white" onClick={() => getVoucher
                    (item.image, item.voucher, item.date, item.points)}>
                    <img src={item.image} className="  rounded-t-xl xl:full" /> 
                    <div className="m-2">
                        <h3 className="xl:text-lg md:text-sm">{item.voucher}</h3> 
                        <h1 className="hidden md:block md:text-sm absolute bottom-4 right-3"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</h1>   
                    </div>
                </div>
            </div>
            )    
        )}
 
    const mapHealtyBeauty=()=>{
        return voucher.HealthyBeauty.map((item,index)=>(
            <div className=" my-2 cursor-pointer z-0  " key={index}> 
                <div className="card rounded-xl md:h-64 md:w-48 w-48 mx-auto md:m-8   p-2  shadow bg-white" onClick={() => getVoucher
                    (item.image, item.voucher, item.date, item.points)}>
                    <img src={item.image} className= "rounded-t-xl xl:full" /> 
                    <div className="m-2">
                        <h3 className="md:text-lg text-sm  ">{item.voucher}</h3> 
                        <h1 className="xl:text-sm hidden md:block     absolute bottom-4 right-3"><FontAwesomeIcon icon={faStar} className="text-yellow-400 inline-block"/>{item.points}</h1>   
                   </div>
                </div>
            </div>                            
            )
        )}

return(
    <>    
        <section className="konten mx-20 ">      
            <div>
                <h6 className=" text-xl font-bold ">Food & Beverage</h6>
                <div className="w-12/12 rounded-2xl m-5 bg-blue-100">
                    <Slider  className="Slider md:block hidden" {...settings}>
                        {mapFood()}
                    </Slider>
                    <Slider className=" md:hidden" {...settings1}>
                        {mapFood()}
                    </Slider>
                </div>
            </div>

            <div>
                <h6 className=" text-xl font-bold ">Entertaiment</h6>
                <div className="w-12/12 rounded-2xl m-5 bg-slate-200 ">
                    <Slider  className="Slider md:block hidden" {...settings}>
                        {mapEntertaiment()}
                    </Slider>
                    <Slider className=" md:hidden" {...settings1}>
                        {mapEntertaiment()}
                    </Slider>
                </div>
            </div>

            <div>
                <h6 className=" text-xl font-bold">Healthy & Beauty</h6>
                <div className="w-12/12 rounded-2xl m-5 bg-slate-200 ">
                <Slider  className="Slider md:block hidden" {...settings}>
                        {mapHealtyBeauty()}
                    </Slider>
                    <Slider className=" md:hidden" {...settings1}>
                        {mapHealtyBeauty()}
                    </Slider>
                </div>
            </div>
        </section>
        {
            modal === true?<Modal image={tempVoucher[1]} voucher={tempVoucher[2]} date={tempVoucher[3]} points={tempVoucher[4]} hide={()=>setModal(false)}/>:''
        }
    
    </>
)
}
export default Card;
