import { createBrowserRouter } from "react-router-dom";
import App from "../screens/App";

import BaseLayout from "../layout/BaseLayout";
import About from "../screens/About";
import Transition from "../wrappers/Transition";
import Navbar from "../components/Navbar";
import Contact from "../screens/Contact";
import Dashboard from "../screens/Dashboard";
import AddServices from "../screens/AddServices";
import AddRecentEvents from "../screens/AddRecentEvents";
import DashBoardHome from "../screens/DashBoardHome";
import AddEvents from "../screens/AddEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Transition key={'home'} item='home'>

          <App />
        </Transition>
      },
      {
        path: "/dashboard",
        element:

          <Dashboard />

        ,
        children: [
          {
            path: "",
            element:
              <Transition key={'dashboard'} item='dashboard'>
                <DashBoardHome />

              </Transition>
          },
          {
            path: "add-services",
            element:
              <Transition key={'add-services'} item='services'>
                <AddServices />
              </Transition>
          },
          {
            path: "add-events",
            element:
              <Transition key={'add-events'} item='events'>
                <AddEvents />
              </Transition>
          },
          {
            path: "add-recent-events",
            element:
              <Transition key={'add-recent-events'} item='recent'>
                <AddRecentEvents />
              </Transition>
          }

        ]

      }
    ],
  },
]);


export default router;