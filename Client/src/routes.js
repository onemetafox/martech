import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./pages/landingpage";
import Calendar from "./pages/calendar";
import BudgetDashboard from "./pages/platform/budget";
import Summary from './pages/platform/summary'
import Contact from './pages/contact';
import About from './pages/about';
import Calls from './pages/calls';

const routes = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/platform/budget",
    element: <BudgetDashboard />,
  },
  {
    path: "/platform/ec2summary",
    element: <Summary />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/calls",
    element: <Calls />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
