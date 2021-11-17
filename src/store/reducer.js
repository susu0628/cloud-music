import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index'

export default combineReducers({
  // 添加具体功能模块的reducer
  recommend: recommendReducer
})