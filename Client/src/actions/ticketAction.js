import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setting, conf} from '../config/config';
export const slice = createSlice({
  name: 'ticketData',
  initialState: {
      tickets: [],
      statistic: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.tickets = action.payload;
    },
    setTicketData: (state, action) => {
        state.tickets = [...state.tickets, action.payload];
    },
    setStatistic: (state, action) => {
        state.statistic = action.payload;
    }
  },
});

export const { getAllData, setTicketData, setStatistic} = slice.actions;

export const getAll = () => dispatch =>{
    axios.post(`${conf.api_url}/ticket/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}
export const getStatistic = (year) => dispatch => {
    axios.post(`${conf.api_url}/ticket/getStatistic`,{year: year})
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(setStatistic(data));
        })
        .catch(() => {
    });
}

export const delTicket= (id, year) => dispatch=> {
    axios.post(`${conf.api_url}/ticket/delTicket`, {id : id})
        .then(response => {
            if(response.data.status === "Success"){
                dispatch(getAll());
                dispatch(getStatistic(year));
                toast.success("success");
            }else{
                toast.warn("Error");
            }
        })
        .catch(() => {
    });
}

export const addTicket = (params) => dispatch => {
    axios.post(`${conf.api_url}/ticket/addTicket`,params)
    .then(response => {
        if(response.data.status === "Success"){
            dispatch(getAll());
            dispatch(getStatistic(params.year));
            toast.success("success");
        }else{
            toast.warn("Error");
        }
    })
    .catch(()=>{
        console.log("error");
    })
}

export const selectTicket = state => state.ticketsData.tickets;
export const selectStatistic = state => state.ticketsData.statistic;


export default slice.reducer;
