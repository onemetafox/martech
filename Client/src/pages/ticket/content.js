import React, {createContext } from 'react';
import {
    Grid, Container, Box
} from '@mui/material';

import TicketChart from "./ticketChart";
import TicketTable from './ticketTable';

export const BudgetDataContext = createContext();

const Content = () =>{
  return(
    <Container maxWidth="lg"  sx={{marginTop:'30px'}}>
      <Box>
        <Grid container spacing={12}>
          <Grid item xs={12} lg={12}>
            <TicketChart/>
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
