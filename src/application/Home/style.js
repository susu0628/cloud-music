import styled from "styled-components";
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`

export const Tab = styled.div`
  height: 44px;
  display: flex;
  background: ${style["theme-color"]};
  &>a {
    width: calc(100vw / 3);
    justify-content: center;
    display: inline-block;
    text-align: center;
    line-height: 44px;
    position: relative;
  }
  &>a.selected::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 36px;
    top: 36px;
    width: 50px;
    height: 2px;
    background: #fff;
  }
`