import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request';
import { 
  CHANGE_SINGER_LIST,
  CHANGE_CATOGORY,
  CHANGE_ALPHA,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_ENTER_LOADING
} from './constants';
import { fromJS, toJS } from 'immutable';

const changeSingerList = (data) => {
  return {
    type: CHANGE_SINGER_LIST,
    data: fromJS(data)
  }
}

export const changePageCount = (data) => {
  return {
    type: CHANGE_PAGE_COUNT,
    data
  }
}

//进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

//滑动最底部loading
export const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
});

// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then((res) => {
      const { artists } = res;
      dispatch(changeSingerList(artists));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败')
    })
  }
}

// 加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    console.log('pageCount', pageCount, singerList);
    getHotSingerListRequest(pageCount).then((res) => {
      const { artists } = res
      dispatch(changeSingerList([...singerList, ...artists]));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    })
  }
}

// 获取歌手分类列表
export const getSingerList = (category, alpha) => {
  return (dispatch) => {
    getSingerListRequest(category, alpha, 0).then((res) => {
      const { artists } = res;
      dispatch(changeSingerList(artists));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('获取歌手分类列表失败')
    })
  }
}

//加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getSingerListRequest(category, alpha, pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};