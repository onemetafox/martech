import axios from 'axios';
import {conf} from '../config/config';

export function getEc2instance(res) {
    var data;
    axios.post(`${conf.api_url}/ec2instance/getAllEc2Instance`)
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
    return data;
}
