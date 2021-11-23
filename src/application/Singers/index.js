/*
 * @Author: jiangsusu
 * @Date: 2021-11-12 14:18:40
 * @LastEditTime: 2021-11-22 16:41:26
 * @LastEditors: jiangsusu
 * @Description: 歌手分类
 */
import React, { memo, useState } from 'react';
import { HorizenItem } from '../../baseUI'
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer } from './style';

const Singers = () => {
  const [currentVal, setCurrentVal] = useState({
    category: '',
    alpha: ''
  })

  const handleClick = (type, value) => {
    console.log('type', type, value)
    setCurrentVal({
      ...currentVal,
      [type]: value
    })
  }
  return (
    <NavContainer>
      <HorizenItem currentVal={currentVal.category} list={categoryTypes} title="分类（默认热门）：" handleClick={(value) => { handleClick('category', value) }} />
      <HorizenItem currentVal={currentVal.alpha} list={alphaTypes} title={"首字母:"} handleClick={(value) => { handleClick('alpha', value) }}></HorizenItem>
    </NavContainer>
  )
}
export default memo(Singers)