import { createSelector } from 'reselect';

const findCategoryById = (state,props)=>{
    const category = state.categoryState.categories.filter(v => v.cate_id ===props.action.id);
    return category
}


const getFetchError = ({ categoryState }) =>
    categoryState.error;

export {
    findCategoryById,
    getFetchError,
};