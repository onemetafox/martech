import axios from 'axios';
import {ROOT_URL} from '../config/const';

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
