import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import { ROOT_URL} from '../config/const';
import jwt_decode from 'jwt-decode';
import * as configs from '../config/config';
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

// The function below is ticketed a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will ticket the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{
    axios.post(`${ROOT_URL}/ticket/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, configs.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}
export const getStatistic = (year) => dispatch => {
    axios.post(`${ROOT_URL}/ticket/getStatistic`,{year: year})
        .then(response => {
            var data = jwt_decode(response.data.data, configs.secret);
            console.log(data);
            dispatch(setStatistic(data));
        })
        .catch(() => {
    });
}

export const delTicket= (id, year) => dispatch=> {
    axios.post(`${ROOT_URL}/ticket/delTicket`, {id : id})
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
    axios.post(`${ROOT_URL}/ticket/addTicket`,params)
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

// The function below is ticketed a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTicket = state => state.ticketsData.tickets;
export const selectStatistic = state => state.ticketsData.statistic;


export default slice.reducer;
