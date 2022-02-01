import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import { ROOT_URL} from '../config/const';

export const slice = createSlice({
  name: 'callData',
  initialState: {
      calls: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.calls = action.payload;
    },
    setCallData: (state, action) => {
        state.calls = [...state.calls, action.payload];
    }
  },
});

export const { getAllData, setCallData} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{
    axios.post(`${ROOT_URL}/call/getAll`)
        .then(response => {
            dispatch(getAllData(response.data.data));
        })
        .catch(() => {
    });
}

export const delCall= (id) => dispatch=> {
    axios.post(`${ROOT_URL}/call/delCall`, {id : id})
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

export const addCall = (params) => dispatch => {
    axios.post(`${ROOT_URL}/call/addCall`,params)
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
export const selectCall = state => state.callsData.calls;


export default slice.reducer;
