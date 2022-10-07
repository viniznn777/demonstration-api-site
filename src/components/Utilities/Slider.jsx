import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Styles from "./Slider.module.css";

import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../Imgs/banner1.jpg";
import banner2 from "../../Imgs/banner2.jpg";
import banner3 from "../../Imgs/banner3.jpg";
import banner4 from "../../Imgs/banner4.jpg";
import banner5 from "../../Imgs/banner5.png";
import banner6 from "../../Imgs/banner6.jpg";

const Slider = () => {
  return (
    <section className={Styles.section}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={true}
        navigation={true}
        loop="true"
        className={Styles.swiper_wrapper}
      >
        <SwiperSlide className={Styles.Slider}>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide className={Styles.Slider}>
          <img src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
