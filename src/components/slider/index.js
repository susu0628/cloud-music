import React, { useEffect, useState, memo } from 'react';
import Swiper from "swiper";
import { SliderContainer } from './style';
import 'swiper/dist/css/swiper.css';

const Slider = ({ list = [] }) => {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  useEffect(() => {
    if (list.length > 0 && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.swiper', {
        pagination: {
          el: ".swiper-pagination",
        },
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
    </SliderContainer>
    
  )
}
export default memo(Slider);