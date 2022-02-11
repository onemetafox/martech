import axios from 'axios';
import {ROOT_URL} from '../config/const';

export function getM2dData(res, month){
    const d = new Date();

    if(!month){
        month = d.getMonth()+1;
    }
    axios.post(`${ROOT_URL}/m2data/getM2dDataByMonth`,{month: month})
    .then(response => {
        res({data: response});
    })
    .catch(() => {
    });
}

