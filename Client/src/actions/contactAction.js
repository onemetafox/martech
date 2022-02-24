import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setting, conf} from '../config/config';
export const slice = createSlice({
  name: 'contactData',
  initialState: {
      contacts: []
  },
  reducers: {
    getAllData: (state, action) => {
      state.contacts = action.payload;
    },
    setContactData: (state, action) => {
        state.contacts = [...state.contacts, action.payload];
    }
  },
});

export const { getAllData, setContactData} = slice.actions;

export const getAll = () => dispatch =>{
    axios.post(`${conf.api_url}/contact/getAll`)
        .then(response => {
            var data = jwt_decode(response.data.data, setting.secret);
            dispatch(getAllData(data));
        })
        .catch(() => {
    });
}

export const delContact= (id) => dispatch=> {
    axios.post(`${conf.api_url}/contact/delContact`, {id : id})
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

export const addContact = (params) => dispatch => {
    axios.post(`${conf.api_url}/contact/addContact`,params)
    .then(response => {
        if(response.data.status === "Success"){
            dispatch(getAll());
            toast.success("success");
        }else{
            var data = jwt_decode(response.data.data, setting.secret);
            toast.error(data);
        }
    })
    .catch(()=>{
        console.log("error");
    })
}

export const selectContact = state => state.contactsData.contacts;


export default slice.reducer;
