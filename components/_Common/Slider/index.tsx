"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./slider.module.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  EffectCube
} from "swiper/core";
SwiperCore.use([EffectCoverflow, EffectCube, Pagination, Navigation]);


const CommonSlider = () => {
  const SliderData = [
    {
      tech: "",
      Pic: "/Images/dp3.jpg"
    },
    {
      tech: "",
      Pic: "/Images/dp2.jpg"
    },
    {
      tech: "",
      Pic: "/Images/xaadali.jpeg"
    },
    {
      tech: "",
      Pic: "/Images/dp4.jpg"
    }
  ]
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay
        pagination={true}
        modules={[EffectCube, Pagination]}
      >
        {SliderData.map((item, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.header} style={{
                  backgroundImage: `url(${item.Pic})`,
                }}>
                </div>

              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  );
}

export default CommonSlider;
