import axios from 'axios';
import {ROOT_URL} from '../config/const';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3090';
export function getY2mData(res, year){
    const d = new Date();
    if(!year){
        year = d.getFullYear();
    }
    axios.post(`${ROOT_URL}/y2data/getY2mGetData`,{year: year})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
