import axios from 'axios';
import {conf} from '../config/config';
export function getLtsData(res, month){
    
    axios.post(`${conf.api_url}/service/getLtsData`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
