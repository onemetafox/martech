import React from 'react';

import Header from './header';
import Banner from './banner';
import Present from './present';
import Step from './step';



function index(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Present />
      <Step />
    </div>
  );
}

export default index;
