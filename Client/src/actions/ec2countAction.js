import axios from 'axios';
import {conf} from '../config/config';
export function getEc2Count(res) {
    var data;
    axios.post(`${conf.api_url}/ec2count/getAllEc2Count`)
        .then(response => {
            res({data: response});
        })
        .catch(() => {
    });
    return data;
  }
