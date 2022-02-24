import { createSlice } from '@reduxjs/toolkit';
export const slice = createSlice({
    name: 'authData',
    initialState: {
            user: [],
            date: {},
            isLoggedin: false,
            prePath : '/'
    },
    reducers: {
        setAuth: (state, action) => {
            state = action.payload;
        },
        setPrePath: (state, action) => {
            state.prePath = action.payload;
        }
    },
});

export const { setAuth, delAuth, setPrePath} = slice.actions;

export const signin = (user) => dispatch =>{
    var data = {};
    data.date = new Date();
    data.user = user;
    data.isLoggedin = true;
    sessionStorage.setItem("auth", data);

    dispatch(setAuth(data));
}

export const signout= (id) => dispatch=> {
    dispatch(delAuth());
    sessionStorage.removeItem('auth');
}

export const isAuth = () =>{
    var data = sessionStorage.getItem("auth");

    var date = new Date();
    if(Math.abs(data.date - date) >= 1800000){

    }
}

export const setPath = (path) => dispatch => {
    dispatch(setPrePath(path));
}


export const selectAuth = state => state.authData;
export const checkAuth = state => state.authData.lsLoggedin;

export const selectPrePath =  state => state.authData.prePath;

export default slice.reducer;
