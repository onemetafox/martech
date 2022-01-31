import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import axios from 'axios';
import { ROOT_URL} from '../config/const';

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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAll = () => dispatch =>{
    axios.post(`${ROOT_URL}/contact/getAll`)
        .then(response => {
            dispatch(getAllData(response.data.data));
        })
        .catch(() => {
    });
}

export const delContact= (id) => dispatch=> {
    axios.post(`${ROOT_URL}/contact/delContact`, {id : id})
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
    axios.post(`${ROOT_URL}/contact/addContact`,params)
    .then(response => {
        if(response.data.status === "Success"){
            dispatch(getAll());
            toast.success("success");
        }else{
            toast.error(response.data.data);
        }
    })
    .catch(()=>{
        console.log("error");
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectState = state => state.contactsData.contacts;


export default slice.reducer;
