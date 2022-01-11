import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { doCategoryStarted, doCategorySucceed } from '../../redux/actions/Category'

function Category(props) {


    useEffect(() => {
        const payload = {}
        props.getCategories(payload)
    }, []);

    const onGetCategory = () => {
        const payload = {}
        props.getCategories(payload)
    }

    return (
        <div>
            <h1>Category</h1>
            <button onClick={onGetCategory}>Get Category</button>
            {
                props.categories && props.categories.map(cate =>
                    <>
                        <p>{cate.reca_name}</p>
                        <p>{cate.reca_desc}</p>
                    </>

                )
            }
        </div>
    )
}


const mapStateToProps = state => ({
    categories: state.categoryState.categories
});


const mapDispatchToProps = (dispatch) => ({
    getCategories: payload => dispatch(doCategoryStarted(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

