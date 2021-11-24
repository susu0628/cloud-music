/*
 * @Author: jiangsusu
 * @Date: 2021-11-12 14:18:40
 * @LastEditTime: 2021-11-22 16:41:26
 * @LastEditors: jiangsusu
 * @Description: 歌手分类
 */
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toJS } from 'immutable';
import { HorizenItem, Scroll } from '../../baseUI'
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer, ListContainer, List, ListItem } from './style';
import { 
  getHotSingerList,
  getSingerList,
  changeEnterLoading, 
  changePageCount, 
  changePullUpLoading, 
  changePullDownLoading, 
  refreshMoreHotSingerList 
} from './store/actionCreators';

const Singers = ({ singerList, getHotSingerDispatch, updateDispatch }) => {
  const [currentVal, setCurrentVal] = useState({
    category: '',
    alpha: ''
  })
  const singerListJS = singerList.toJS();
  const handleClick = (type, value) => {
    const { category, alpha } = currentVal;
    setCurrentVal({
      ...currentVal,
      [type]: value
    })
    if (type === 'category') {
      updateDispatch(value, alpha)
    } else {
      updateDispatch(category, value)
    }
  }

  useEffect(() => {
    getHotSingerDispatch()
  }, [])

  return (
    <div>
      <NavContainer>
        <HorizenItem currentVal={currentVal.category} list={categoryTypes} title="分类（默认热门）：" handleClick={(value) => { handleClick('category', value) }} />
        <HorizenItem currentVal={currentVal.alpha} list={alphaTypes} title={"首字母:"} handleClick={(value) => { handleClick('alpha', value) }}></HorizenItem>
      </NavContainer>
      <ListContainer>
        <Scroll>
          <List>
            {
              singerListJS.map((item, index) => {
                console.log(`item${index+1}`, item)
                const { accountId, picUrl, name } = item;
                return (
                  <ListItem key={`${accountId}${index}`}>
                    <div className="img_wrapper">
                      <img src={`${picUrl}?param=300x300`} />
                    </div>
                    <span className="name">{name}</span>
                  </ListItem>
                )
              })
            }
          </List>
        </Scroll>
      </ListContainer>
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHotSingerDispatch() {
      dispatch(getHotSingerList())
    },
    updateDispatch(category, alpha) {
      dispatch(changePageCount(0));
      dispatch(getSingerList(category, alpha, 0));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers));