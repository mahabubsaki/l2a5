import { createBrowserRouter } from "react-router-dom";
import App from "../screens/App";

import BaseLayout from "../layout/BaseLayout";
import About from "../screens/About";
import Transition from "../wrappers/Transition";
import Navbar from "../components/Navbar";

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
        path: "/about",
        element:
          <Transition key={'about'} item='about'>
            <Navbar />
            <About />

          </Transition>

      }
    ],
  },
]);


export default router;