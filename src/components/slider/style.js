import styled from "styled-components";
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
  width: 100%;
  background: #fff;
  margin: auto;
  .swiper {
    position: relative;
    .swiper-wrapper {
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
`