import React, {useState, useEffect, createContext } from 'react';
import {
    Grid, Container, Box
} from '@mui/material';

import TicketChart from "./ticketChart";
import TicketTable from './ticketTable';

export const BudgetDataContext = createContext();

const Content = () =>{
  const [year, setYear] = useState(new Date().getFullYear());

  return(
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
  );
}
export default Content;
