import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { dashboardroutes, routes } from "./utils/routes";
import Main from "./views/main/Main";
import { useState } from "react";

const App = () => {

const [isAuth,setisAuth]=useState(true);
  
  const getRoutes = () => {
    return routes.map((route) => {
      return <Route key={route.path} path={route.path} element={route.component} />;
    });
  };

  const getDashboardRoutes = () => {
    return dashboardroutes.map((route) => {
      return <Route key={route.path} path={route.path} element={route.component} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
        <Route
        path="*"
        element={<Navigate to="dashboard/home" replace />}
    />
        <Route path={"dashboard"} element={<Main />}>
          {getDashboardRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
