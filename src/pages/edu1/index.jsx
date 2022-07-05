import Style from './style.module.css';
import earth from '../../assets/earth.png';
import reduce from '../../assets/reduce.png';
import reuse from '../../assets/reuse.png';
import plastic from '../../assets/plastic.png';
import reduceg from '../../assets/reduceg.png';
import reuseg from '../../assets/reuseg.png';
import recycleg from '../../assets/recycleg.png';
import Jump from 'react-reveal/Jump';

const FirstEdu = () => {
  return (
    <div>
      <div className={Style.container}>

        <div className={Style.content}>
          <div className={Style.background}>
            <div className={Style.content1}>
              {/* text */}

              <div className={Style.content_item}>
                <div className={Style.content_item_textmaster}>
                  <div className={Style.content_item_text}>
                    <h1>3R</h1>
                  </div>
                  <div className={Style.content_item_text_judul}>
                    <h2>Reduce</h2>
                    <h2>Reuse</h2>
                    <h2>Recycle</h2>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className={Style.content_item}>
                <div className={Style.content_item_image_judul}>
                  <Jump>

                    <img src={earth} alt="" />
                  </Jump>
                </div>
              </div>
            </div>


            <iframe className='mb-20' width="100%" height="600" src="https://www.youtube-nocookie.com/embed/kY5Qz4TuV5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
          <div className={Style.background}>
    
              <div className={Style.content2}>
                {/* text */}
                <div className={Style.content_item_1}>
                  <div className={Style.content_item_textmaster_1}>
                    <div className={Style.content_item_text}>
                      <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Reduce</h2>
                    </div>
                    <div className={Style.content_item_text}>
                      <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Reuse</h2>
                    </div>
                    <div className={Style.content_item_text}>
                      <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Recycle</h2>
                    </div>
                  </div>
                </div>
                {/* image */}
                <div className={Style.content_item_1}>
                  <div className={Style.content_item_imageMaster}>
                    <div className={Style.content_item_image_1}>
                      <img src={reduce} alt="" />
                    </div>
                    <div className={Style.content_item_image_1}>
                      <img src={reuse} alt="" />
                    </div>
                    <div className={Style.content_item_image_1}>
                      <img src={plastic} alt="" />
                    </div>
                  </div>
                </div>
                <div className={Style.content_item_1}>
                  <div className={Style.content_item_textmaster_1}>
                    <div className={Style.content_item_text}>
                      <p className='sc:text-base md:text-base lg:text-2xl font-bold'>Reuse of products and parts </p>
                    </div>
                    <div className={Style.content_item_text}>
                      <p className='sc:text-base md:text-base lg:text-2xl font-bold'>Reuse of products and parts </p>
                    </div>
                    <div className={Style.content_item_text}>
                      <p className='sc:text-base md:text-base lg:text-2xl font-bold'>Reduction of waste generation </p>
                    </div>
                  </div>
                </div>
              </div>
     

          </div>
          <div className={Style.content3}>
            {/* text */}
            <div className={Style.content_item_2_judul}>
              <h1 className='sc:text-base md:text-base lg:text-4xl font-bold'>HOW TO IMPLEMENT 3R IN REALIFE</h1>
            </div>

            <div className={Style.content_item_2}>
              <div className={Style.content_item_textmaster_2}>
                <div className={Style.content_item_text}>
                  <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Reduce</h2>
                </div>
                <div className={Style.content_item_text}>
                  <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Reuse</h2>
                </div>
              </div>
            </div>
            <div className={Style.content_item_2}>
              <div className={Style.content_item_imageMaster_2}>
                <div className={Style.content_item_image}>
                  <img src={reduceg} alt="" />
                </div>
                <div className={Style.content_item_image}>
                  <img src={reuseg} alt="" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={Style.content_item_2}>
              <div className={Style.content_item_textmaster_2_1}>
                <div className={Style.content_item_text}>
                  <h2 className='sc:text-base md:text-base lg:text-4xl font-bold'>Recycle</h2>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={Style.content_item_2}>
              <div className={Style.content_item_image}>
                <img src={recycleg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default FirstEdu;
