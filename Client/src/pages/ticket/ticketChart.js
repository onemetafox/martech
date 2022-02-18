// import "./styles.css";
import React, {useState, useEffect, useMemo} from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import * as c3 from "c3";
import { useSelector, useDispatch } from 'react-redux';
import { getStatistic, selectStatistic } from "../../actions/ticketAction";
import {
    Card,
    CardActions ,
    CardHeader,
    Avatar,
    Button,
    Typography,
    CardContent
} from '@mui/material';
import {red,} from '@mui/material/colors';
// import roundPathCorners from "./round";

const TicketChart =(props) =>{
  const [year, setYear] =useState(new Date().getFullYear())
  const handleIncreaseYear = () => {
    setYear(year+1);
  }
  const handleDecreaseYear=()=>{
    setYear(year-1);
  }
  const dispatch = useDispatch();
  const steps = useMemo(
    () =>['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
    []
  );
  useEffect(() => {
    dispatch(getStatistic(year));
  },[year]);
  const columnData = useSelector(selectStatistic);
  useEffect(()=>{
    c3.generate({
      bindto: "#chart1",
      data: {
        columns: columnData,
        type: "bar",
        colors: {
          low: "#7955ff",
          medium: "#ff7656",
          high: "#ffe7e1"
        },
        // color: function (color, d) {
        //   // d will be 'id' when called for legends
        //   return color;
        // },
        groups: [
          ["low"],
          ["medium"],
          ["high"]
        ],
        order: "asc"
      },
      axis: {
        x: {
          type: "category",
          categories: steps
        },
        y: {
            min: 0,
        }
      },
      bar: {
        width: {
          ratio: 0.6 //setting width of bar
        },
        spacing: 2 //setting space between bars
      }
    });
  }, [steps, columnData]);

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
          title={<Typography variant='h5'>User Story Tickets</Typography>}
          subheader = {<Typography sx={{textAlign: "center"}} variant='h6'>Year - {year}</Typography>}
      />
      <CardContent>
        <div id="chart1"></div>
      </CardContent>
    </Card>
  );
}

export default TicketChart;

