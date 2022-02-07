import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import { ROOT_URL} from '../config/const';
import jwt_decode from 'jwt-decode';
import * as configs from '../config/config';
export const slice = createSlice({
  name: 'eventData',
  initialState: {
      events: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.events = action.payload;
    },
    setEventData: (state, action) => {
        state.events = [...state.events, action.payload];
    }
  },
});

export const { getAllData, setEventData} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{
    axios.post(`${ROOT_URL}/event/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, configs.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}

export const delEvent= (id) => dispatch=> {
    axios.post(`${ROOT_URL}/event/delEvent`, {id : id})
        .then(response => {
            if(response.data.status === "Success"){
                dispatch(getAll());
                toast.success("success");
            }else{
                toast.warn("Error");
            }
        })
        .catch(() => {
    });
}

export const addEvent = (params) => dispatch => {
    axios.post(`${ROOT_URL}/event/addEvent`,params)
    .then(response => {
        if(response.data.status === "Success"){
            dispatch(getAll());
            toast.success("success");
        }else{
            toast.warn("Error");
        }
    })
    .catch(()=>{
        console.log("error");
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEvent = state => state.eventsData.events;


export default slice.reducer;
