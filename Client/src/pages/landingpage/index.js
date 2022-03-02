import {React, useEffect} from 'react';

import Header from './header';
import Banner from './banner';
import Present from './present';
import Step from './step';
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';



const Index = (props) =>{
  const navigate = useNavigate();
  useEffect(()=>{
    var data = JSON.parse(sessionStorage.getItem("auth"));
    if(data){
      navigate('/about');
    }
},[])
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

export default Index;
