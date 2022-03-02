import React, {useState, useEffect, useContext} from "react";
import { Bar} from "react-chartjs-2";
import {
    Card,
    CardActions ,
    CardHeader,
    Avatar,
    Button,
    Typography,
    CardContent,
    Grid
} from '@mui/material';
import {red,} from '@mui/material/colors';
import { ArcElement} from 'chart.js';
import Chart from 'chart.js/auto'
import BarChartIcon from '@mui/icons-material/BarChart';
import {BudgetDataContext} from './content';

Chart.register(ArcElement);
const origindata = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
  datasets: [
    {
      data: [],
      label: 'My First dataset',
      backgroundColor: '#EC932F',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    }
  ]
};

const Y2mchart = (props) =>{
    
    const[chatdata, setChartData] = useState(origindata);
    const budgetData = useContext(BudgetDataContext);
    const year = useState(props.year);
    const handleIncreaseYear = () => {
      props.setYear(props.year+1);
    }
    const handleDecreaseYear=()=>{
      props.setYear(props.year-1);
    }
    useEffect(() => {
        var c_data = budgetData.y2mChartData;
        var rowData = [];
        for(var i = 0; i < c_data.length; i++){
          rowData[c_data[i].month-1] = c_data[i].cost;
        }
        for(var j = 0; j < 12; j++){
          if(!rowData[j]){
            rowData[j] = 0;
          }
        }
        const stateData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
          datasets: [
            {
              data: rowData,
              label: props.year,
              backgroundColor: '#EC932F',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
            }
          ]
        };
        setChartData(stateData);
        origindata.datasets[0].data = rowData;
        origindata.datasets[0].label = year;
    }, [budgetData]);
    return (
        
        <Card sx={{maxHeight:500, height:'500px', boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
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
                title={<Typography variant='h5'>Year to Month Spend</Typography>}
            />
            <CardContent>
                <Grid 
                    container 
                    spacing={1} 
                    direction={"column"} 
                    justifyContent={'flex-start'} 
                    alignItems={'center'}>
                    <Grid item lg={3} style={{width:'inherit'}}>
                        <Bar
                        data={chatdata}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
  }

export default Y2mchart;
