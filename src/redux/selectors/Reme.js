import { createSelector } from 'reselect';

const findRemeById = (state,props)=>{
    const category = state.remeState.categories.filter(v => v.reme_id ===props.action.id);
    return category
}


const getFetchError = ({ remeState }) =>
    remeState.error;

export {
    findRemeById,
    getFetchError,
};