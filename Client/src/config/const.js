import { secret } from "./config";
export const ROOT_URL = 'http://localhost:3090';
export const eventStructure = {
    contact : {
        _id : ''
    },
    team: '',
    start: '',
    end: '',
    type: '',
    _id: ''
}
export const contactStructure = {
    name: '',
    ntid: '',
    email: '',
    phone: '',
    timezone: '',
    location:'',
    _id: ''
}
export const callStructure = {
    contact : {
        _id : ''
    },
    description: '',
    type : '',
    start: '',
    end  : '',
    status: '',
    _id: ''
}

export const headerConf = {
    headers:{
        "X-CSRF-TOKEN":"KL6lJ5ycmqwJgAsop78o5zhN",
        "name": "session",
        "expires": new Date()
    }
}
