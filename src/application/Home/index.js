import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

const Home = (props) => {
  console.log('props', props);
  const { route } = props;
  return (
    <div>
      <div>Home</div>
      {
        renderRoutes(route.routers)
      }
    </div>
    
  )
}
export default memo(Home)