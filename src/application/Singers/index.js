/*
 * @Author: jiangsusu
 * @Date: 2021-11-12 14:18:40
 * @LastEditTime: 2021-11-22 16:41:26
 * @LastEditors: jiangsusu
 * @Description: 歌手分类
 */
import React, { memo } from 'react';
import { HorizenItem } from '../../baseUI'
import { categoryTypes } from '../../api/config';

const Singers = () => {
  return (
    <HorizenItem list={categoryTypes} title="分类（默认热门）：" />
  )
}
export default memo(Singers)