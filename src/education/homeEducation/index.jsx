import Style from "./style.module.css";
import imageGreen from "../../assets/ggreen.png";
import trash from "../../assets/trash.png";
import reduce from "../../assets/reduce.png";
import cup from "../../assets/cup.png";
import green from "../../assets/33.jpg";
import compost from "../../assets/tanah.jpg";
import background from "../../assets/Polygon1.png";
import App from "../../App";
import Nav from "../../components/Navbar/Nav";
const HomeEdu = () => {
    return (
        <div>
            <Nav />
            <br />
            <div className={Style.container}>
                <div className={Style.content}>
                    <div className={Style.background}>
                        <div className={Style.content1}>
                            {/* image */}
                            <div className={Style.content_item}>
                                <div className={Style.content_item_image}>
                                    <img src={imageGreen} alt="" />
                                </div>
                            </div>
                            {/* text */}
                            <div className={Style.content_item}>
                                <div className={Style.content_item_textmaster}>
                                    <div className={Style.content_item_text}>
                                        <h1>Organic Waste</h1>
                                    </div>
                                    {/* button */}
                                    <a href="/edu3">
                                        <button className={Style.btn_learnmore}>Learn More</button>
                                    </a>
                                    <div className={Style.content_item_text}>
                                        <h1>Inorganic Waste</h1>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    {/* icon */}
                    <div className={Style.content_item_icon_2}>
                        <img src={reduce} alt="" />
                    </div>
                    <div className={Style.background}>
                        <div className={Style.content2}>
                            <div className={Style.content_item}>
                                <div className={Style.content_item_textmaster}>
                                    <div className={Style.content_item_text_1}>
                                        <h1>3R</h1>
                                        <h2>Reuse Recycle Reduce</h2>
                                        <p>All help to cut down on the amount of waste we throw away. They conserve natural resources, landfill space and energy. Plus, the three R’s save land and money that communities must use to dispose of waste in landfills. </p>
                                    </div>
                                    <div className={Style.content_item_btn}>
                                    {/* button */}
                                    <a href="/edu1">
                                        <button className={Style.btn_learnmore}>Learn More</button>
                                    </a>
                                </div>
                                </div>
                             

                            </div>
                            <div className={Style.content_item}>
                                <div className={Style.content_item_image_1}>
                                    <img src={cup} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* icon */}
                    <div className={Style.content_item_icon_2}>
                        <img src={reduce} alt="" />
                    </div>
                    <div className={Style.background}>
                        <div className={Style.content3}>
                            <div className={Style.content_item_2}>
                                <div className={Style.content_item_image_2}>
                                    <img src={green} alt="" />
                                </div>
                            </div>
                            <div className={Style.content_item_2}>

                                <div className={Style.content_item_textmaster}>
                                    <div className={Style.content_item_text_2}>
                                        <h1>8 Ways to </h1>
                                        <h1>Take Care</h1>
                                        <h1>Our Earth</h1>
                                    </div>
                                    <div className={Style.content_item_btn}>
                                    {/* button */}
                                    <a href="/edu2">
                                        <button className={Style.btn_learnmore}>Learn More</button>
                                    </a>
                                </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default HomeEdu;
