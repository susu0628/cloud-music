/*
 * @Author: jiangsusu
 * @Date: 2021-11-16 18:05:18
 * @LastEditTime: 2021-11-22 11:07:11
 * @LastEditors: jiangsusu
 * @Description: 
 */
import React, { memo } from 'react';
import LazyLoad from 'react-lazyload';
import { getCount } from '../../api/utils'
import { 
  ListWrapper,
  ListItem,
  List
} from './style';

function RecommendList (props) {
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map ((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    <LazyLoad placeholder={<img src={require('./music.png') + "?param=300x300"} width="100%" height="100%" alt="music" />}>
                      <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
  }
 
export default memo(RecommendList);