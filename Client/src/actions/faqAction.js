import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setting, conf} from '../config/config';
export const slice = createSlice({
  name: 'faqData',
  initialState: {
      faqs: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.faqs = action.payload;
    },
    setFaqData: (state, action) => {
        state.faqs = [...state.faqs, action.payload];
    }
  },
});

export const { getAllData, setFaqData} = slice.actions;

export const getAll = () => dispatch =>{
    axios.post(`${conf.api_url}/faq/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}

export const delFaq= (id) => dispatch=> {
    axios.post(`${conf.api_url}/faq/delFaq`, {id : id})
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

export const addFaq = (params) => dispatch => {
    axios.post(`${conf.api_url}/faq/addFaq`,params)
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
export const selectFaq = state => state.faqsData.faqs;


export default slice.reducer;
