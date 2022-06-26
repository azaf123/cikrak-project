import Style from './style.module.css';
import grid from '../../assetFaza/grid.png';
import reduce from "../../assetFaza/reduce.png";
import reuse from '../../assetFaza/reuse.png';
import plastic from '../../assetFaza/plastic.png';
import reduceg from '../../assetFaza/reduceg.png';
import reuseg from '../../assetFaza/reuseg.png';
import recycleg from '../../assetFaza/recycleg.png';
import bring from '../../assetFaza/bring.png'
import hand from '../../assetFaza/hand.jpg'
import paje from '../../assetFaza/paje.jpg'
import stop from '../../assetFaza/stop.jpg'
import sampah from '../../assetFaza/sampah.jpg'
import nanem from '../../assetFaza/nanem.jpg'
import tanah from '../../assetFaza/tanah.jpg'
const SecondEdu = () => {
    return (
        <div>
            <div className={Style.background}>
            </div>
            {/* <img src={background} alt="" /> */}
            <div className={Style.title}>
                <h1>8 ways to care our earth</h1>
            </div>
            <div className={Style.container}>
                <div className={Style.content}>
                    <div className={Style.content1}>

                        {/* text */}
                        <div className={Style.content_item}>
                            <div className={Style.content_item_textmaster}>
                                <div className={Style.content_item_text_title}>
                                    <h1>8 Ways to take care our earth</h1>
                                </div>

                            </div>

                        </div>
                        {/* image */}
                        <div className={Style.content_item}>
                            <div className={Style.content_item_image}>
                                <img src={grid} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={Style.content2}>
                        {/* text */}
                        <div className={Style.content_item_1}>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={bring} alt="" />
                                </div>
                                <div className={Style.content_item_text}>
                                    <h2>Bring Shopping Bag
                                    </h2>
                                    <p>
                                        Remember to bring reusable bags to the grocery store or for any other shopping activities to reduce consumption of disposable bags.
                                    </p>
                                </div>

                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_text}>
                                    <h2>Invest in a reusable water bottle.
                                    </h2>
                                    <p>
                                        Remember to bring reusable bags to the grocery store or for any other shopping activities to reduce consumption of disposable bags.
                                    </p>
                                </div>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={hand} alt="" />
                                </div>
                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={paje} alt="" />
                                </div>
                                <div className={Style.content_item_text}>

                                    <h2>Bring your own reusable cup</h2>
                                    <p>
                                        Think about how many disposable cups are used every day in just your local coffee shop. Bringing a mug for your morning coffee can reduce the amount of waste you produce annually. Imagine how much waste we could reduce if we all made this simple daily change!
                                    </p>
                                </div>

                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_text}>
                                    <h2>Refuse single-use items.
                                    </h2>
                                    <p>
                                        Take note on how often you rely on single-use items and choose to replace them with more sustainable versions. Refusing plastic straws and disposable cutlery when you go out and bringing your own containers for leftovers are a few ways you can start today.
                                    </p>
                                </div>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={stop} alt="" />
                                </div>
                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={sampah} alt="" />
                                </div>
                                <div className={Style.content_item_text}>
                                    <h2> Avoid products with microbeads</h2>
                                    <p>
                                    Avoid products with microbeads.
Facial scrubs and beauty products containing plastic microbeads were banned in the United States in 2015, but won’t be fully phased out until 2019. Read the labels when purchasing products and opt for ones that contain natural scrubbing ingredients like salt or sugar.. </p>
                                </div>

                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_text}>
                                    <h2>   Make sure your waste goes to the right place
                                    </h2>
                                    <p>
                                    Make sure your waste goes to the right place.
Do your best to ensure that the waste you dispose of ends up where it should. Recycle the materials that are recyclable in your area and make sure to reduce the likelihood of your garbage ending up in the environment by keeping a lid on your trash can when it’s outside.                                    </p>
                                </div>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={nanem} alt="" />
                                </div>
                            </div>
                            <div className={Style.content_item_textmaster_1}>
                                <div className={Style.content_item_imageMaster}>
                                    <img src={tanah} alt="" />
                                </div>

                                <div className={Style.content_item_text}>
                                    <h2> Compost
                                    </h2>
                                    <p>
                                   
Composting at home reduces the volume of garbage sent to landfills and reduces the chance of some products becoming marine debris.                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
}
export default SecondEdu;
// Bring Shopping Bag
// Remember to bring reusable bags to the grocery store or for any other shopping activities to reduce consumption of disposable bags.

// Invest in a reusable water bottle.
// Remember to bring reusable bags to the grocery store or for any other shopping activities to reduce consumption of disposable bags.

// Bring your own reusable cup
// Think about how many disposable cups are used every day in just your local coffee shop. Bringing a mug for your morning coffee can reduce the amount of waste you produce annually. Imagine how much waste we could reduce if we all made this simple daily change!

// Refuse single-use items.
// Take note on how often you rely on single-use items and choose to replace them with more sustainable versions. Refusing plastic straws and disposable cutlery when you go out and bringing your own containers for leftovers are a few ways you can start today.

// Avoid products with microbeads.
//  Avoid products with microbeads.
// Make sure your waste goes to the right place.
// Do your best to ensure that the waste you dispose of ends up where it should. Recycle the materials that are recyclable in your area and make sure to reduce the likelihood of your garbage ending up in the environment by keeping a lid on your trash can when it’s outside.

// Compost.
// Composting at home reduces the volume of garbage sent to landfills and reduces the chance of some products becoming marine debris.