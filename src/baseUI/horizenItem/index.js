/*
 * @Author: jiangsusu
 * @Date: 2021-11-22 16:16:48
 * @LastEditTime: 2021-11-22 16:33:45
 * @LastEditors: jiangsusu
 * @Description: 横向分类列表
 */
import React, { memo, useRef } from 'react';
import { useEffect } from 'react';
import Scroll from '../scroll';
import { List, ListItem } from './style'

/**
 * list 接受的列表数据
 * currentVal 当前的item
 * title 列表左侧的标题
 * handleClick 点击不同的item执行的方法
 */
const Horizen = ({ list, currentVal, title, handleClick }) => {
  const Category = useRef(null);

  // 加入初始化内容宽度的逻辑
useEffect (() => {
  let categoryDOM = Category.current;
  let tagElems = categoryDOM.querySelectorAll ("span");
  let totalWidth = 0;
  Array.from (tagElems).forEach (ele => {
    console.log('ele', ele);
    console.log('offsetWidth', ele.offsetWidth);
    totalWidth += ele.offsetWidth;
  });
  categoryDOM.style.width = `${totalWidth}px`;
}, []);
  return (
    <Scroll direction="horizental">
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map((item) => {
              return (
                <ListItem 
                  key={item.key} 
                  className={`${currentVal === item.key ? 'selected' : ''}`}
                  onClick={() => handleClick(item.key)}
                >
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}
export default memo(Horizen)

