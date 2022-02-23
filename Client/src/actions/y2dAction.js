import axios from 'axios';
import { conf } from '../config/config';
export function getY2mData(res, year){
    const d = new Date();
    if(!year){
        year = d.getFullYear();
    }
    axios.post(`${conf.api_url}/y2data/getY2mGetData`,{year: year})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}
