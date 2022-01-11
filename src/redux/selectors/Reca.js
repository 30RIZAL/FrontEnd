import { createSelector } from 'reselect';

const findRecaById = (state,props)=>{
    const category = state.recaState.categories.filter(v => v.reca_name ===props.action.id);
    return category
}


const getFetchError = ({ recaState }) =>
    recaState.error;

export {
    findRecaById,
    getFetchError,
};