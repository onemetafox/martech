import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setting, conf} from '../config/config';
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

export const getAll = () => dispatch =>{
    axios.post(`${conf.api_url}/call/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}

export const delCall= (id) => dispatch=> {
    axios.post(`${conf.api_url}/call/delCall`, {id : id})
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
    axios.post(`${conf.api_url}/call/addCall`,params)
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

export const selectCall = state => state.callsData.calls;

export default slice.reducer;
