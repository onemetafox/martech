import axios from 'axios';
import { browserHistory } from 'react-router';
import {ROOT_URL} from '../config/const';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3090';
export function getEc2instance(res) {
    var data;
    axios.post(`${ROOT_URL}/ec2instance/getAllEc2Instance`)
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
    return data;
}
