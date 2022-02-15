// import "./styles.css";
import React, {useState, useEffect, useMemo} from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import { Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { useSelector, useDispatch } from 'react-redux';
import { getStatistic, selectStatistic } from "../../actions/ticketAction";
import { ArcElement} from 'chart.js';
import {
    Card,
    CardActions ,
    CardHeader,
    Avatar,
    Button,
    Typography,
    CardContent,
    Grid,
    Box,
    Slider
} from '@mui/material';
import {red,} from '@mui/material/colors';
// import roundPathCorners from "./round";
Chart.register(ArcElement);
function valuetext(value) {
  return `${value}°C`;
}
const origindata = {
  labels: ["Missing Data. Please check server..."],
  datasets: [
    {
      data: [],
      label: 'Low',
      backgroundColor: '#02f744',
      borderColor: 'rgba(2, 247, 68,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(2, 247, 68,0.4)',
      hoverBorderColor: 'rgba(2, 247, 68,1)',
    },
    {
      data: [],
      label: 'Middle',
      backgroundColor: '#e5f01a',
      borderColor: 'rgba(229, 240, 26,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      data: [],
      label: 'High',
      backgroundColor: '#f21616',
      borderColor: 'rgba(242, 22, 22,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    }
  ]
};
const TicketChart =() =>{
  const [year, setYear] =useState(new Date().getFullYear())
  const[chatdata, setChartData] = useState(origindata);

  const dispatch = useDispatch();

  const handleIncreaseYear = () => {
    setYear(year+1);
  }
  const handleDecreaseYear=()=>{
    setYear(year-1);
  }
  
  const steps = useMemo(
    () =>['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
    []
  );

  useEffect(() => {
    dispatch(getStatistic(year));
  },[year]);
  
  const columnData = useSelector(selectStatistic);
  useEffect(() => {
    const statedata = {
      labels: steps,
      datasets: [
        {
          data: columnData[0],
          label: 'low',
          backgroundColor: '#02f744',
          borderColor: 'rgba(2, 247, 68,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(2, 247, 68,0.4)',
          hoverBorderColor: 'rgba(2, 247, 68,1)',
        },
        {
          data: columnData[1],
          label: 'Middle',
          backgroundColor: '#e5f01a',
          borderColor: 'rgba(229, 240, 26,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(229, 240, 26,0.4)',
          hoverBorderColor: 'rgba(229, 240, 26,1)',
        },
        {
          data: columnData[2],
          label: 'High    ' + year,
          backgroundColor: '#f21616',
          borderColor: 'rgba(242, 22, 22,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(242, 22, 22,0.4)',
          hoverBorderColor: 'rgba(242, 22, 22,1)',
        }
      ]
    };
    setChartData(statedata);
    origindata.label = steps;
    origindata.datasets[0].data = columnData[0];
    origindata.datasets[1].data = columnData[1];
    origindata.datasets[2].data = columnData[2];
  },[columnData]);
  return (
    <Card sx={{ boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
      <CardActions sx={{ justifyContent:"right"}}>
        <Button size="nomoral" color="primary" onClick={handleDecreaseYear}>
          BACK
        </Button>
        <Button size="nomoral" color="primary"  onClick={handleIncreaseYear}>
          NEXT
        </Button>
      </CardActions> 
      <CardHeader
          avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <BarChartIcon/>
          </Avatar>
          }
          title={<Typography variant='h5'>Ticket Summary</Typography>}
          // subheader = {<Typography sx={{textAlign: "center"}} variant='h6'>{year}</Typography>}
      />
      <CardContent>
        <Grid 
          container 
          spacing={1} 
          direction={"column"} 
          justifyContent={'flex-start'} 
          alignItems={'center'}>
          <Grid item lg={2} style={{width:'inherit', maxWidth:'900px'}}>
            <Bar
              data={chatdata}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TicketChart;

