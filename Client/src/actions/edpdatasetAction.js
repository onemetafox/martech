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

export const getAll = () => dispatch =>{
    axios.post(`${conf.api_url}/edpdataset/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
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

export const selectEdpdataset = state => state.edpdatasetsData.edpdatasets;


export default slice.reducer;
