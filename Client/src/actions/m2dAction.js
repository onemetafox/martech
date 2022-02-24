import axios from 'axios';
import {conf} from '../config/config';
export function getM2dData(res, month){
    const d = new Date();
    if(!month){
        month = d.getMonth()+1;
    }
    axios.post(`${conf.api_url}/m2data/getM2dDataByMonth`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}

