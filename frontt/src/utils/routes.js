import Main from "../views/main/Main";
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
        component: <Dashboard />,
      },
      {
        path: "employees",
        component: <Employees />,
      },
      {
        path: "orders",
        component: <Orders />,
      },
]
