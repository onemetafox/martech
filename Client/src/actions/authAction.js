import { createSlice } from '@reduxjs/toolkit';
// import jwt from 'jwt-simple'
export const slice = createSlice({
    name: 'authData',
    initialState: {
            user: [],
            date: {},
            isLoggedin: false
    },
    reducers: {
        setAuth: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setAuth, delAuth} = slice.actions;

export const signin = (user) => dispatch =>{
    var data = {};
    data.date = new Date();
    data.user = user;
    data.isLoggedin = true;
    // sessionStorage.setItem("auth", jwt.encode(data, SECRET_KEY));
    sessionStorage.setItem("auth", data);

    dispatch(setAuth(data));
}

export const signout= (id) => dispatch=> {
    dispatch(delAuth());
    sessionStorage.removeItem('auth');
}

export const isAuth = () =>{
    // var data = jwt.decode(sessionStorage.getItem("auth"), SECRET_KEY);
    var data = sessionStorage.getItem("auth");

    var date = new Date();
    if(Math.abs(data.date - date) >= 1800000){

    }
}


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAuth = state => state.authData;
export const checkAuth = state => state.authData.lsLoggedin;

export default slice.reducer;
