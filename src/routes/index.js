import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const routers = [
  {
    path: '/',
    component: lazy(() => import('../../src/application/Home')) ,
    routers: [
      {
        path: '/',
        exact: true,
        render: () => {
          return (
            <Redirect to={"/recommend"} />
          )
        }
      },
      {
        path: '/recommend',
        component: lazy(() => import('../../src/application/Recommend'))
      },
      {
        path: '/singers',
        component: lazy(() => import('../../src/application/Singers'))
      },
      {
        path: '/rank',
        component: lazy(() => import('../../src/application/Rank'))
      }
    ]
  }
]
export default routers
