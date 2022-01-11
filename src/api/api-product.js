import axios from 'axios';
import config from '../config/config';

const findAll = async(payload)=>{
    try {
        const result = await axios.get(`${config.domain}/product/`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const addProduct = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/product/`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findAll,
    addProduct
}