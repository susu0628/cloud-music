import React, { Suspense } from "react";
import routers from "./routes/index";
import store from "./store";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <HashRouter>
          <GlobalStyle />
          <IconStyle />
          {
            renderRoutes(routers)
          }
        </HashRouter>
      </Suspense>
    </Provider>
    
  );
}

export default App;
