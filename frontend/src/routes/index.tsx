import { createBrowserRouter } from "react-router-dom";
import App from "../screens/App";
import BaseLayout from "../layout/BaseLayout";
import Transition from "../wrappers/Transition";
import Dashboard from "../screens/Dashboard";
import AddServices from "../screens/AddServices";
import AddRecentEvents from "../screens/AddRecentEvents";
import DashBoardHome from "../screens/DashBoardHome";
import AddEvents from "../screens/AddEvents";
import RecentEvents from "../screens/RecentEvents";
import Services from "../screens/Services";
import Events from "../screens/Events";

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
              <Transition key={'add-services'} item='add services'>
                <AddServices />
              </Transition>
          },
          {
            path: "add-events",
            element:
              <Transition key={'add-events'} item='add events'>
                <AddEvents />
              </Transition>
          },
          {
            path: "add-recent-events",
            element:
              <Transition key={'add-recent-events'} item='add recents'>
                <AddRecentEvents />
              </Transition>
          },
          {
            path: "recent-events",
            element:
              <Transition key={'recent-events'} item='recent events'>
                <RecentEvents />
              </Transition>
          },
          {
            path: "events",
            element:
              <Transition key={'events'} item='events'>
                <Events />
              </Transition>
          }
          ,
          {
            path: "services",
            element:
              <Transition key={'services'} item='services'>
                <Services />
              </Transition>
          }

        ]

      }
    ],
  },
]);


export default router;