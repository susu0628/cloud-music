/*
 * @Author: jiangsusu
 * @Date: 2021-11-22 16:26:13
 * @LastEditTime: 2021-11-22 16:56:18
 * @LastEditors: jiangsusu
 * @Description: 样式文件
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

/**
 * css flex属性深入理解: https://www.zhangxinxu.com/wordpress/2019/12/css-flex-deep/
 * flex: flex-grow  flex-shrink  flex-basic
 */
export const List = styled.div`
  height: 30px;
  overflow: hidden;
  display: flex;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style ["font-size-m"]};
  }
`
export const ListItem = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  flex: 0 0 auto;
  font-size: ${style ["font-size-m"]};
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`
