import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async";
import Landingpage from "./pages/landingpage";
import Calendar from "./pages/calendar";
import BudgetDashboard from "./pages/platform/budget";
import Ec2 from './pages/platform/ec2'
import Contact from './pages/contact';
import About from './pages/about';
import Calls from './pages/calls';
import Help from './pages/help';
import Ticket from './pages/ticket';
import Edpdatasets from './pages/edpdatasets';
import Edpdq from './pages/edpdq';
import PrivateRoute from "./auth";
import { ToastContainer } from "react-toastify";
import { useMsalAuthentication, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import RequestInterceptor from './interceptor';
import { InteractionType } from '@azure/msal-browser';
import './style/App.css';

function App() {
  //useMsalAuthentication(InteractionType.Popup);
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="EDP"
        defaultTitle="EDP"
      />
      <AuthenticatedTemplate>
        <RequestInterceptor>
          <Router>
            <Routes>
              <Route path="/" element={<About/>} />
              <Route exact path='/platform/budget' element={<PrivateRoute path='/platform/budget'> <BudgetDashboard/></PrivateRoute>}/>
              <Route exact path='/platform/ec2' element={<PrivateRoute path='/platform/ec2'> <Ec2/></PrivateRoute>}/>
              <Route exact path='/contact' element={<PrivateRoute path='/contact'> <Contact/></PrivateRoute>}/>
              <Route exact path='/calendar' element={<PrivateRoute path='/calendar'> <Calendar/></PrivateRoute>}/>
              <Route exact path='/calls' element={<PrivateRoute path='/calls'> <Calls/></PrivateRoute>}/>
              <Route exact path='/ticket' element={<PrivateRoute path='/ticket'> <Ticket/></PrivateRoute>}/>
              <Route path="/about" element={<About/> } />
              <Route path="/help" element={<Help/> } />
              <Route path="/edpdatasets" element={<Edpdatasets/> } />
              <Route path="/edpdq" element={<Edpdq/> } />
            </Routes>
          </Router>
          </RequestInterceptor>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage/>} />
            <Route exact path='/platform/budget' element={<PrivateRoute path='/platform/budget'> <BudgetDashboard/></PrivateRoute>}/>
            <Route exact path='/platform/ec2' element={<PrivateRoute path='/platform/ec2'> <Ec2/></PrivateRoute>}/>
            <Route exact path='/contact' element={<PrivateRoute path='/contact'> <Contact/></PrivateRoute>}/>
            <Route exact path='/calendar' element={<PrivateRoute path='/calendar'> <Calendar/></PrivateRoute>}/>
            <Route exact path='/calls' element={<PrivateRoute path='/calls'> <Calls/></PrivateRoute>}/>
            <Route exact path='/ticket' element={<PrivateRoute path='/ticket'> <Ticket/></PrivateRoute>}/>
            <Route path="/about" element={<About/> } />
            <Route path="/help" element={<Help/> } />
            <Route path="/edpdatasets" element={<Edpdatasets/> } />
            <Route path="/edpdq" element={<Edpdq/> } />
          </Routes>
        </Router>
      </UnauthenticatedTemplate>
      
      <ToastContainer autoClose={2000} />
    </HelmetProvider>
  )
}

export default App;
