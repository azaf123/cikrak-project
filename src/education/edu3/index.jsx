import putih from '../../assets/putih.png'
import Style from './style.module.css';
import EduTiga from '../../assets/edu3.png'
import food from '../../assets/food.png'
import plastic from '../../assets/plastic.png'
import Nav from '../../components/Navbar/Nav';
const ThirdEdu = () => {

    return (
        <div>
            <Nav />
            <div className={Style.content1}>
                <div className={Style.container}>
                    <div className={Style.image}>
                        <img src={putih} alt="" />
                    </div>
                    <div className={Style.text}>
                        <h1>
                            Organic Waste
                        </h1>
                        <h1>
                            And
                        </h1>
                        <h1>
                            Inorganic Waste
                        </h1>
                    </div>
                    <div className={Style.imageEdu}>
                        <img src={EduTiga} alt="" />
                    </div>
                </div>
            </div>
            <div className={Style.content2}>
                <div className={Style.container_2}>
                    <div className={Style.textjudul}>
                        <h1>
                            ORGANIC WASTE
                        </h1>
                    </div>
                    <div className={Style.content_master2}>
                        <div className={Style.content_item2}>
                            <div className={Style.content_organic}>
                                <div className={Style.text2}>
                                    <p>
                                        Organic waste is any material that is biodegradable and comes from either a plant or an animal. Biodegradable waste is organic material that can be broken
                                        into carbon dioxide, methane or simple organic molecules. Examples of organic waste include green waste, food waste, food-soiled paper, non-hazardous
                                        wood waste, green waste, and landscape and pruning waste
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="col">
                                        <div className={Style.subtitle}>
                                            <p>Food Waste</p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <ul>
                                                    <li>
                                                        Sandwiches
                                                    </li>
                                                    <li>
                                                        Cheese
                                                    </li>
                                                    <li>
                                                        Vegetables
                                                    </li>
                                                    <li>
                                                        Bread
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-item col">
                                        <div className={Style.subtitle}>
                                            <p>Food Soiled Paper</p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <ul>
                                                    <li>
                                                        Sandwiches
                                                    </li>
                                                    <li>
                                                        Cheese
                                                    </li>
                                                    <li>
                                                        Vegetables
                                                    </li>
                                                    <li>
                                                        Bread
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-item col">
                                        <div className={Style.subtitle}>
                                            <p>Non-Hazardous Wood Waste</p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <ul>
                                                    <li>
                                                        Sandwiches
                                                    </li>
                                                    <li>
                                                        Cheese
                                                    </li>
                                                    <li>
                                                        Vegetables
                                                    </li>
                                                    <li>
                                                        Bread
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-item col">
                                        <div className={Style.subtitle}>
                                            <p>Green Waste</p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <ul>
                                                    <li>
                                                        Sandwiches
                                                    </li>
                                                    <li>
                                                        Cheese
                                                    </li>
                                                    <li>
                                                        Vegetables
                                                    </li>
                                                    <li>
                                                        Bread
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.content_organicImage}>
                                <img src={food} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className={Style.content3}>
                <div className={Style.container_2}>
                    <div className={Style.textjudul}>
                        <h1>
                            Inorganic Waste
                        </h1>
                    </div>
                    <div className={Style.content_master2}>
                        <div className={Style.content_item2}>
                            <div className={Style.content_organic}>
                                <div className={Style.text2}>
                                    <p>
                                        Inorganic waste is a kind of garbage or the rest of the material that is not easily decomposed which usually does not originate from animals and plants. Inorganic waste can be in the form of plastic, glass or glass bottles, cans, paper, and other food wrappers.
                                    </p>
                                </div>
                                <div className="title flex flex-row">
                                    <div className="title-item col">
                                        <div className={Style.subtitle}>
                                            <p>Solid Inorganic Waste</p>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <ul>
                                                    <li>
                                                        Namely aluminum
                                                    </li>
                                                    <li>
                                                        Ironbase
                                                    </li>
                                                    <li>
                                                        Belong bottles
                                                    </li>
                                                    <li>
                                                        Plastic
                                                    </li>
                                                    <li>
                                                        and several similar items.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="title-item col">
                                        <div className={Style.subtitle}>
                                            <p>Liquid Inorganic Waste</p>
                                        </div>
                                        <div className="row">
                                        
                                        <p>
                                            <ul>
                                                <li>
                                                    Washing soap

                                                </li>
                                                <li>
                                                    Detergent
                                                </li>

                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="title-item col">
                                    <div className={Style.subtitle}>
                                        <p>Inorganic Waste Gas</p>
                                    </div>
                                    <div className="row">
                                        <p>
                                            <ul>
                                                <li>
                                                    Gas or motor vehicle fumes that contain carbon monoxide or CO
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={Style.content_organicImage}>
                            <img src={plastic} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div >


    )
}
export default ThirdEdu;

