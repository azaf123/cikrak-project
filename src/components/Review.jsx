import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Review = () => {
  return (
    <div>
      {/* <p className="text-primary text-sm">Happy Clients</p> */}
      <h1 className="md:text-4xl text-2xl mt-1 font-semibold text-center">
        User Reviews
      </h1>
      <div className="my-14">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20"
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img
                src="https://img.freepik.com/free-photo/beautiful-korean-girl-thinking-imaging-smiling-looking-upper-left-corner-daydreaming-standing-against-blue-background_1258-76018.jpg?w=1060&t=st=1656693331~exp=1656693931~hmac=3eb3be990987638800f2a58560ae828d070b05d991d9d6e16d43fccd2c0f58a4"
                alt="avatar"
                className="object-cover mx-auto my-auto w-auto md:w-24 md:h-24 rounded-full"
              />
              <h3 className="font-semibold">Agnes</h3>
              <p className="text-lightprimary text-xs">Housewife</p>
              <p className="text-gray-600 text-xs leading-normal my-2 h-14">
                “I think this cikrak really helped me, especially the waste
                pick-up feature which really helped me in managing my home
                waste.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img
                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?w=1060&t=st=1656693769~exp=1656694369~hmac=9aa60a3b9c9b3dc46dcb66d91b4a121e18476b364daf6ca53b34f69349e5b9ad"
                alt="avatar"
                className="object-cover mx-auto my-auto w-auto md:w-24 md:h-24 rounded-full"
              />
              <h3 className="font-semibold">Jessica</h3>
              <p className="text-lightprimary text-xs">Developer</p>
              <p className="text-gray-600 text-xs leading-normal my-2 h-14">
                “I think cikrak is a good website, especially not focusing on
                the waste pick-up feature, but also on education to make the
                wider community aware of the impact of poor waste management.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img
                src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?w=1060&t=st=1656693833~exp=1656694433~hmac=d84820762f00ce2d14e949bb2724959b96d0e90145cbd05676a0e04f323197c5"
                alt="avatar"
                className="object-cover mx-auto my-auto w-auto md:w-24 md:h-24 rounded-full"
              />
              <h3 className="font-semibold">Dytha</h3>
              <p className="text-lightprimary text-xs">UI Designer</p>
              <p className="text-gray-600 text-xs leading-normal my-2 h-14">
                “From the appearance of the Cikrak website interface, I think it
                is very good, and easy to use. Hopefully, it can have an impact
                on nature.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
