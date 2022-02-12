import React, {useState, useEffect, createContext } from 'react';
import {
    Grid, Container, Box
} from '@mui/material';

import TicketChart from "./ticketChart";
import TicketTable from './ticketTable';
import { getY2mData } from '../../actions/y2dAction';
import jwt_decode from 'jwt-decode';
import * as configs from '../../config/config';

export const BudgetDataContext = createContext();

const Content = () =>{
  
  const [m2dChartData, setm2dChartData] = useState([]);
  const [y2mChartData, sety2mChartData] = useState([]);
  const [ltsData, setLtsData]           = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(()=>{
    getY2mData( (res) => {
      var data = jwt_decode(res.data.data, configs.secret);
      sety2mChartData(data);
    }, year);
  },[year]);

    return(
      <BudgetDataContext.Provider value={{y2mChartData}}>
        <Container maxWidth="lg"  sx={{marginTop:'30px'}}>
          <Box>
            <Grid container spacing={12}>
              <Grid item xs={12} lg={12}>
                <TicketChart year = {year} setYear={setYear}/>
              </Grid>
              <Grid item xs={12} lg={12}>
                <TicketTable />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </BudgetDataContext.Provider>
    );
}
export default Content;
