import axios from 'axios';
import {ROOT_URL} from '../config/const';

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
