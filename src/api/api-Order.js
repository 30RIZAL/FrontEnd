import axios from 'axios';
import config from '../config/config';

const addOrder = async (id) => {
  try {
    const result = await axios.post(
      `${config.domain}/cart/order/${id}`,
      
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/order/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const cancel = async (id) => {
  try {
    const result = await axios.put(`${config.domain}/cart/cancel/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  addOrder,
  findAll,
  cancel,
};
