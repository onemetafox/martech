import React, {useState, useEffect, createContext } from 'react';
import {
    Grid, Container, Box
} from '@mui/material';

import M2dchart from "./m2dChart";
import Y2mchart from "./y2mChart";
import Lts3days from './lts3days';
import { getM2dData} from '../../../actions/m2dAction';
import { getY2mData } from '../../../actions/y2dAction';
import { getLtsData} from '../../../actions/serviceAction';
import jwt_decode from 'jwt-decode';
import {setting} from '../../../config/config';

export const BudgetDataContext = createContext();

const Content = () =>{
  
  const [m2dChartData, setm2dChartData] = useState([]);
  const [y2mChartData, sety2mChartData] = useState([]);
  const [ltsData, setLtsData]           = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(()=>{
    getM2dData( (res) => {
      var data = jwt_decode(res.data.data, setting.secret);
      setm2dChartData(data);
    });
  },[]);
  useEffect(()=>{
    getY2mData( (res) => {
      var data = jwt_decode(res.data.data, setting.secret);
      sety2mChartData(data);
    }, year);
  },[year]);
  useEffect(()=>{
    getLtsData( (res) => {
      var data = jwt_decode(res.data.data, setting.secret);
      setLtsData(data);
    })
  },[]);

    return(
      <BudgetDataContext.Provider value={{m2dChartData,y2mChartData,ltsData}}>
        <Container maxWidth="lg"  sx={{marginTop:'30px'}}>
          <Box>
            <Grid container spacing={12}>
              <Grid item xs={12} lg={5}>
                <M2dchart />
              </Grid>
              <Grid item xs={12} lg={7}>
                <Y2mchart year = {year} setYear={setYear}/>
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12} lg={12}>
                <Lts3days />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </BudgetDataContext.Provider>
    );
}
export default Content;
