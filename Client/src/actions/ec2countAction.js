import axios from 'axios';
import {ROOT_URL} from '../config/const';

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
