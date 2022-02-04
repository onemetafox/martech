import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

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

const account = JSON.parse(sessionStorage.getItem("auth"));
var routes =[];

if(account){
  routes = [
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/platform/budget",
      element: account.admin?<BudgetDashboard />: <Landingpage/>,
    },
    {
      path: "/platform/ec2summary",
      element: account.admin || account.developer ? <Summary />: <Landingpage/>,
    },
    {
      path: "/contact",
      element: account.admin || account.developer ? <Contact />: <Landingpage/>,
    },
    {
      path: "/calendar",
      element: account.admin || account.developer ? <Calendar />: <Landingpage />,
    },
    {
      path: "/calls",
      element: account.admin || account.developer ? <Calls />: <Landingpage />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
}else{
  routes = [
    {
      path: "*",
      element: <Landingpage />
    },
    {
      path: "/about",
      element: <About />,
    }
  ];
}
export default routes;

// export default function Routes (){
//   const auth = {};
//   useEffect(()=> {
//     auth = JSON.parse(sessionStorage.getItem('auth'));
//   }, []);
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component= {Landingpage}/>
//         <Route exact path="/platform/budget" component= {BudgetDashboard}/>
//         <Route exact path="/platform/ec2summary" component= {Summary}/>
//         <Route exact path="/contact" component= {Contact}/>
//         <Route exact path="/calendar" component= {Calendar}/>
//         <Route exact path="/calls" component= {Calls}/>
//         <Route exact path="/about" component= {About}/>
//       </Switch>
//     </BrowserRouter>
//   );
// };
