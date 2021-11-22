/*
 * @Author: jiangsusu
 * @Date: 2021-11-12 17:35:21
 * @LastEditTime: 2021-11-22 15:58:38
 * @LastEditors: jiangsusu
 * @Description: 
 */
import styled from "styled-components";
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
  width: 100%;
  background: #fff;
  margin: auto;
  position: relative;
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
      background: ${style["theme-color"]};
    }
  }
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
  }
`