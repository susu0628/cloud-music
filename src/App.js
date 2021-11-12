import React, { Suspense } from "react";
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routers from "./routes/index";
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {
          renderRoutes(routers)
        }
      </HashRouter>
    </Suspense>
  );
}

export default App;
