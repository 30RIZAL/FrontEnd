import axios from 'axios';
import config from '../config/config';

const addCart = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/cart/item/${data.user_id}`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const findAll = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/cart/`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/cart/${id}`);
        return  result;
    } catch (error) {
        return error;
    }
}
const cancel = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/cart/cancel${id}`);
        return  result;
    } catch (error) {
        return error;
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/clit/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/cart/update/${data.user_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

export default {
    addCart,
    findAll,
    findRow,
    deleteRow,
    updateRow,
    cancel
}


