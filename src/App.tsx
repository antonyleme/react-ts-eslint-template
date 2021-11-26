import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import routes from 'Core/config/routes';

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>

  );
};

export default App;
