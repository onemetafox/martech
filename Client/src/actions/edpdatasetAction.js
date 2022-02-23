import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setting, conf} from '../config/config';
export const slice = createSlice({
  name: 'EdpdatasetData',
  initialState: {
      edpdatasets: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.edpdatasets = action.payload;
    },
    setEdpdatasetData: (state, action) => {
        state.edpdatasets = [...state.edpdatasets, action.payload];
    }
  },
});

export const { getAllData, setEdpdatasetData} = slice.actions;

// The function below is faqed a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will faq the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{

    // axios.get(`${ROOT_URL}/getCsrfToken`)
    // .then((res)=>{
    //     axios.defaults.headers.post['CSRF-Token'] = res.data.csrfToken;
        axios.post(`${conf.api_url}/edpdataset/getAll`)
            .then(response => {
                var data = jwt_decode(response.data.data, setting.secret);
                dispatch(getAllData(data));
            })
            .catch(() => {
        });
    // })
}

export const delEdpdataset= (id) => dispatch=> {
    axios.post(`${conf.api_url}/edpdataset/delEdpdataset`, {id : id})
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

export const addEdpdataset = (params) => dispatch => {
    axios.post(`${conf.api_url}/edpdataset/addEdpdataset`,params)
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

// The function below is faqed a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEdpdataset = state => state.edpdatasetsData.edpdatasets;


export default slice.reducer;
