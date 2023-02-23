import "./App.css";
import { useRoutes } from "react-router-dom";
import { Landingpage,LogIn,Profile,Proposal,PostJob,Investor,Dashboard, AllJobs, Resume, Applications, ProfileJobSeeker, DashboardJob} from "./pages/global";
import Register from "./pages/Register";
import StartupForm from "./pages/Register/StartUpForm";
import JobseekerForm from "./pages/Register/JobseekerForm";




function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/register",
      element: <Register />,
      children:[
        {
          path:'startupform',
          element: <StartupForm />
        },
        {
          path:'jobseekerform',
          element: <JobseekerForm />
        }
      ]
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/startup-dashboard",
      element: <Dashboard />,
      children: [
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
    {
      path: "/jobseeker-dashboard",
      element: <DashboardJob />,
      children: [
        {
          index: "alljobs",
          element: <AllJobs />,
        },
        {
          path: "job-seeker-profile",
          element: <ProfileJobSeeker />,
        },
        {
          path: "alljobs",
          element: <AllJobs />,
        },
        {
          path: "Resume",
          element: <Resume />,
        },
        {
          path: "applications",
          element: <Applications />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
