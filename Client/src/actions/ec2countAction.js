import axios from 'axios';
import { browserHistory } from 'react-router';
import {ROOT_URL} from '../config/const';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3090';

export function getEc2Count(res) {
    var data;
    axios.post(`${ROOT_URL}/ec2count/getAllEc2Count`)
        .then(response => {
            res({data: response});
        })
        .catch(() => {
    });
    return data;
  }
