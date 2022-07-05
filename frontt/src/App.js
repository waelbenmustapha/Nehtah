import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { dashboardroutes, routes } from "./utils/routes";
import Main from "./views/main/Main";

const App = () => {
  const getRoutes = () => {
    return routes.map((route) => {
      return <Route path={route.path} element={route.component} />;
    });
  };

  const getDashboardRoutes = () => {
    return dashboardroutes.map((route) => {
      return <Route path={route.path} element={route.component} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
        <Route path="dashboard" element={<Main />}>
          {getDashboardRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
