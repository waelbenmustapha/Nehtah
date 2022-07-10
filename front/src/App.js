import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { dashboardroutes, routes } from "./utils/routes";
import Main from "./views/main/Main";
import { AuthProvider } from "./contexts/AuthContext";
import { RequireAuth } from "./components/auth/RequireAuth";

const App = () => {

  
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
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {getRoutes()}
        <Route
        path="*"
        element={<Navigate to="dashboard/home" replace />}
    />
        <Route path={"dashboard"} element={<RequireAuth><Main /></RequireAuth>}>
          {getDashboardRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
