/*
 * @Author: jiangsusu
 * @Date: 2021-11-17 14:59:11
 * @LastEditTime: 2021-11-22 16:14:18
 * @LastEditors: jiangsusu
 * @Description: 
 */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { Content } from './style'
import { Scroll, Loading } from '../../baseUI';
import * as actionTypes from './store/actionCreators';

const Recommend = ({ bannerList, recommendList, enterLoading, getBannerDataDispatch, getRecommendListDataDispatch }) => {
  useEffect(() => {
    /**
     * 切换到另一个tab页之后，再回到推荐页，会再次发起请求
     * 优化：如果页面有数据，则不发起请求
     */
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider list={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
      {
        enterLoading && <Loading />
      }
    </Content>
    
  )
}
const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));