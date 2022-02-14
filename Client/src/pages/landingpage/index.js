import React from 'react';

import Header from './header';
import Banner from './banner';
import Present from './present';
import Step from './step';
import { ToastContainer } from "react-toastify";



function index(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Present />
      <Step />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default index;
