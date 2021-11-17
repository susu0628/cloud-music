import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { Content } from './style'
import Scroll from '../../baseUI/scroll';
import * as actionTypes from './store/actionCreators';

const Recommend = ({ bannerList, recommendList, getBannerDataDispatch, getRecommendListDataDispatch }) => {
  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider list={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
    
  )
}
const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList'])
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