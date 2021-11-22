/*
 * @Author: jiangsusu
 * @Date: 2021-11-17 15:50:55
 * @LastEditTime: 2021-11-22 16:06:49
 * @LastEditors: jiangsusu
 * @Description: 
 */
import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => {
  return {
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
  }
}
export const changeEnterLoading = (data) => {
  return {
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
  }
}
export const changeRecommendList = (data) => {
  return {
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
  }
}
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then((data) => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest ().then(data => {
      dispatch (changeRecommendList(data.result));
      dispatch(changeEnterLoading(false)) // 改变loading
    }).catch (() => {
      console.log ("推荐歌单数据传输错误");
    });
  }
};