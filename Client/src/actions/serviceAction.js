import axios from 'axios';
import {ROOT_URL} from '../config/const';

export function getLtsData(res, month){
    
    axios.post(`${ROOT_URL}/service/getLtsData`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
