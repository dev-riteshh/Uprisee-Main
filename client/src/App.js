import "./App.css";
import { useRoutes } from "react-router-dom";

import { Landingpage,LogIn,Register,Profile,Proposal,PostJob,Investor,Dashboard } from "./pages/global";




function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
            index:'/investor',
            element : <Investor />
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "investor",
          element: <Investor />,
        },
        {
          path: "proposal",
          element: <Proposal />,
        },
        {
          path: "postjob",
          element: <PostJob />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
