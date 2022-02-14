import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async";

import Landingpage from "./pages/landingpage";
import Calendar from "./pages/calendar";
import BudgetDashboard from "./pages/platform/budget";
import Summary from './pages/platform/summary'
import Contact from './pages/contact';
import About from './pages/about';
import Calls from './pages/calls';
import Help from './pages/help';
import Ticket from './pages/ticket';
import PrivateRoute from "./auth";
import { ToastContainer } from "react-toastify";
import './style/App.css';

function App() {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Material App"
        defaultTitle="Material App - React Admin & Dashboard Template"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route exact path='/platform/budget' element={<PrivateRoute path='/platform/budget'> <BudgetDashboard/></PrivateRoute>}/>
          <Route exact path='/platform/ec2summary' element={<PrivateRoute path='/platform/ec2summary'> <Summary/></PrivateRoute>}/>
          <Route exact path='/contact' element={<PrivateRoute path='/contact'> <Contact/></PrivateRoute>}/>
          <Route exact path='/calendar' element={<PrivateRoute path='/calendar'> <Calendar/></PrivateRoute>}/>
          <Route exact path='/calls' element={<PrivateRoute path='/calls'> <Calls/></PrivateRoute>}/>
          <Route exact path='/ticket' element={<PrivateRoute path='/ticket'> <Ticket/></PrivateRoute>}/>
          <Route path="/about" element={<About/> } />
          <Route path="/help" element={<Help/> } />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </HelmetProvider>
  )
}

export default App;
