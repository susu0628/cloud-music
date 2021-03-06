/*
 * @Author: jiangsusu
 * @Date: 2021-11-16 18:07:31
 * @LastEditTime: 2021-11-22 15:58:14
 * @LastEditors: jiangsusu
 * @Description: 
 */
import styled from "styled-components";
import style from '../../assets/global-style'

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img_wrapper {
    position: relative;
    padding-bottom: 100%;
    height: 0;
    // 给图片上的图标和文字提供一个遮罩阴影来衬托文字，防止由于背景是白色的时候，文字会看不清或者看不到
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-s"]};
      line-height: 15px;
      color: ${style["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      border-radius: 3px;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${style["font-size-s"]};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
  }
  
`