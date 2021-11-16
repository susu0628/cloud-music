import React, { useEffect, useState, memo } from 'react';
import Swiper, { Autoplay, Pagination } from "swiper";
import { SliderContainer } from './style';
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Pagination]);

const Slider = ({ list = [] }) => {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  useEffect(() => {
    if (list.length > 0 && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [list.length, sliderSwiper])
  return (
    <SliderContainer>
      <div className="swiper">
        <div className="swiper-wrapper">
          {
            list.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item.imageUrl} />
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="before"></div>
    </SliderContainer>
    
  )
}
export default memo(Slider);