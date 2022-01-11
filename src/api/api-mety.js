import axios from 'axios';
import config from '../config/config';

const list = async () => {
    try {
        const response = await axios.get(`${config.domain}/type/`)
        return  response;
    } catch (err) {
        return await err.message
    }
}

export default {
    list
}