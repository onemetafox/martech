import axios from 'axios';
import { browserHistory } from 'react-router';
import {ROOT_URL} from '../config/const';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3090';
export function getLtsData(res, month){
    const d = new Date();
    
    axios.post(`${ROOT_URL}/service/getLtsData`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
