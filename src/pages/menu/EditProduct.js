import React, { useState, useEffect } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doRecaStarted } from '../../redux/actions/Reca';
import { doUpdateRemeRequest } from '../../redux/actions/Reme';
import { doGetRetoRequest } from '../../redux/actions/Reto';
import { doGetMetyRequest } from '../../redux/actions/Mety';
import apiReme from '../../api/api-reme';

export default function AddProduct({ match }) {
  let history = useHistory();
  const { reto } = useSelector((state) => state.retoState);
  const { mety } = useSelector((state) => state.metyState);
  const dispatch = useDispatch();
  const [uploaded, setUploaded] = useState(false);

  const [values, setValues] = useState({
    reme_id: undefined,
    reme_name: undefined,
    reme_desc: undefined,
    reme_price: undefined,
    error: '',
  });

  useEffect(() => {
    apiReme.findRow(match.params.id).then((result) => {
      const { data } = result;
      setValues({
        reme_id: data.reme_id,
        reme_name: data.reme_name,
        reme_desc: data.reme_desc,
        reme_price: data.reme_price,
      });
    });
  }, []);

  const [files, setFiles] = useState({
    file: undefined,
    imagePreviewUrl: undefined,
  });

  useEffect(() => {
    dispatch(doGetRetoRequest());
    dispatch(doGetMetyRequest());
  }, []);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFiles({
        ...files,
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setFiles({
      file: undefined,
      imagePreviewUrl: undefined,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload={
      reme_id:values.reme_id,
      reme_name:values.reme_name,
      reme_desc:values.reme_desc,
      reme_price:values.reme_price,
    }
    dispatch(doUpdateRemeRequest(payload));
    window.history.back();
  };
  return (
    <div class='mt-10 sm:mt-0'>
      <div class='md:grid md:grid-cols-3 md:gap-6  items-center'>
        <div class='mt-5 md:mt-0 md:col-span-6'>
          <form action='#' method='POST'>
            <div class='shadow overflow-hidden sm:rounded-md'>
              <div class='px-4 py-5 bg-white sm:p-6'>
                <div class='grid grid-cols-6 gap-6'>
                  <div class='col-span-6 sm:col-span-2'>
                    <input
                      type='text'
                      onChange={handleOnChange('reme_id')}
                      class='hidden'
                      value={values.reme_id}
                    />

                    <label
                      for='prod_name'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Product Name
                    </label>
                    <input
                      type='text'
                      onChange={handleOnChange('reme_name')}
                      value={values.reme_name}
                      autocomplete='given-name'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>

                  <div class='col-span-6 sm:col-span-3'>
                    <label
                      for='prod_desc'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <input
                      type='text'
                      value={values.reme_desc}
                      onChange={handleOnChange('reme_desc')}
                      autocomplete='family-name'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div class='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label
                      for='prod_price'
                      class='block text-sm font-medium text-gray-700'
                    >
                      Price
                    </label>
                    <input
                      type='text'
                      name='prod_price'
                      value={values.reme_price}
                      onChange={handleOnChange('reme_price')}
                      id='phoneNumber'
                      class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  onClick={() => {
                    history.push('#');
                  }}
                  class='inline-flex mr-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  onClick={onSubmit}
                  class='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
