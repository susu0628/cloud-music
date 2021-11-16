import styled from "styled-components";
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
  width: 100%;
  background: #fff;
  margin: auto;
  .swiper {
    position: relative;
    width: 98%;
    margin: auto;
    border-radius: 6px;
    .swiper-wrapper {
      z-index: 10;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
    .swiper-pagination-bullet-active {
      background: ${style ["theme-color"]};
    }
  }
  .before {
    position: absolute;
    top: 80px;
    height: 100px;
    width: 100%;
    background: ${style ["theme-color"]};
  }
`