import { RequireAuth } from "../components/auth/RequireAuth";
import Dashboard from "../views/menuScreens/dashboard/Dashboard";
import Employees from "../views/menuScreens/employees/Employees";
import Orders from "../views/menuScreens/orders/Orders";
import Signin from "../views/signin/Signin";
import Signup from "../views/signup/Signup";


export const routes = [

  {
    path: "sign-in",
    component: <Signin />,
  },
  {
    path: "sign-up",
    component: <Signup />,
  },
];

export const dashboardroutes = [
    {
        path: "home",
        component: <RequireAuth><Dashboard /></RequireAuth>,
      },
      {
        path: "employees",
        component: <RequireAuth><Employees /></RequireAuth>,
      },
      {
        path: "orders",
        component: <RequireAuth><Orders /></RequireAuth>,
      },
]
