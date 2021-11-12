import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { Top, Tab } from './style';

const Home = (props) => {
  console.log('props', props);
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">推荐</NavLink>
        <NavLink to="/singers" activeClassName="selected">歌手</NavLink>
        <NavLink to="/rank" activeClassName="selected">排行榜</NavLink>
      </Tab>
      {
        renderRoutes(route.routers)
      }
    </div>
    
  )
}
export default memo(Home)