import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import { ROOT_URL} from '../config/const';

export const slice = createSlice({
  name: 'eventData',
  initialState: {
      events: []
  },
  reducers: {
    getAllData: (state, action) => {
        console.log(state);
        console.log(action);
      state.events = action.payload;
    },
  },
});

export const { getAllData} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{
    axios.post(`${ROOT_URL}/plateform/getAllEc2Count`)
        .then(response => {
            dispatch(getAllData(response));
        })
        .catch(() => {
    });
}

export const addEvent = (params) => dispatch => {
    console.log(params);
    axios.post(`${ROOT_URL}/plateform/getAllEc2Count`)
    .then(response => {
        console.log("success");
        dispatch(getAllData(response));
    })
    .catch(()=>{
        console.log("error");
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectState = state => state.eventsData.events;


export default slice.reducer;
