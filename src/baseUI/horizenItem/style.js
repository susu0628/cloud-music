/*
 * @Author: jiangsusu
 * @Date: 2021-11-22 16:26:13
 * @LastEditTime: 2021-11-22 16:56:18
 * @LastEditors: jiangsusu
 * @Description: 样式文件
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const List = styled.div`
  height: 30px;
`
export const ListItem = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`
