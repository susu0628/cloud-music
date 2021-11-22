/*
 * @Author: jiangsusu
 * @Date: 2021-11-22 16:16:48
 * @LastEditTime: 2021-11-22 16:33:45
 * @LastEditors: jiangsusu
 * @Description: 横向分类列表
 */
import React, { memo } from 'react';
import Scroll from '../scroll';
import { List, ListItem } from './style'

/**
 * list 接受的列表数据
 * oldVal 当前的item
 * title 列表左侧的标题
 * handleClick 点击不同的item执行的方法
 */
const Horizen = ({ list, oldVal, title, handleClick }) => {
  return (
    <Scroll direction="horizental">
      <List>
        <span>{title}</span>
        {
          list.map((item) => {
            return (
              <ListItem 
                key={item.key} 
                className={`${oldVal === item.key ? 'selected' : ''}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            )
          })
        }
      </List>
    </Scroll>
  )
}
export default memo(Horizen)

