import React, {useState, useEffect, useContext} from "react";
import { Bar} from "react-chartjs-2";
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    CardContent,
    Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {red,} from '@mui/material/colors';
import { ArcElement} from 'chart.js';
import Chart from 'chart.js/auto'
import BarChartIcon from '@mui/icons-material/BarChart';
import {Ec2CountDataContext} from './content';
Chart.register(ArcElement);

const origindata = {
  labels: ["Missing Data. Please check server..."],
  datasets: [
    {
      data: [],
      label: 'Running Instance',
      backgroundColor: '#EC932F',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      data: [],
      label: 'Stopping Instance',
      backgroundColor: '#F44336',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    }
  ]
};
const Ec2Graph = () =>{
    
    const[chatdata, setChartData] = useState(origindata);

    const ec2countdata = useContext(Ec2CountDataContext);
    
    useEffect(() => {
      var label = [];
      var runnig = [];
      var stopped = [];
          var data = ec2countdata.ec2countdata;
          for (var i = 0; i < data.length; i++){
            label.push(data[i].doc.Region);
            runnig.push(data[i].doc.Running);
            stopped.push(data[i].doc.Stopped);
          }

          const statedata = {
            labels: label,
            datasets: [
              {
                data: runnig,
                label: 'Running Instance',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              },
              {
                data: stopped,
                label: 'Stopping Instance',
                backgroundColor: '#F44336',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
              }
            ]
          };
          setChartData(statedata);
          origindata.label = label;
          origindata.datasets[0].data = runnig;
          origindata.datasets[1].data = stopped;
    },[ec2countdata]);
    return (
        
        <Card sx={{ boxShadow:'0px 0px 30px 10px rgb(82 63 105 / 15%)'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <BarChartIcon/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={<Typography variant='h5'>EC2 Summary</Typography>}
                
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

export default Ec2Graph;
