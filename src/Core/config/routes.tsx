import React from 'react';
import IRoute from 'Core/types/IRoute';

import Home from 'Pages/Home';

const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />
  }
];

export default routes;
