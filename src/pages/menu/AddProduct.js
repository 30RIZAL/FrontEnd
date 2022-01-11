import React, { useState, useEffect } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doRecaStarted } from '../../redux/actions/Reca';
import { doAddRemeRequest } from '../../redux/actions/Reme';
import { doGetRetoRequest } from '../../redux/actions/Reto';
import { doGetMetyRequest } from '../../redux/actions/Mety';

export default function AddProduct(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const reme = useSelector((state) => state.remeState.reme);
  const { authUser } = useSelector((state) => state.userState);
  const { reto } = useSelector((state) => state.retoState);
  const { mety } = useSelector((state) => state.metyState);

  const [isRefresh, setIsRefesh] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  async function fetchData() {
    const payload = {};
    dispatch(doRecaStarted(payload));
  }

  // load data category only once when page render
  useEffect(() => {
    fetchData();
    setIsRefesh(false);
  }, [isRefresh]);

  useEffect(() => {
    dispatch(doGetRetoRequest())
    dispatch(doGetMetyRequest());
  }, []);

  const [values, setValues] = useState({
    reme_id: undefined,
    reme_name: undefined,
    reme_desc: undefined,
    reme_price: undefined,
    reme_url_image: undefined,
    reme_reto_id: undefined,
    reme_mety_name: undefined,

    error: '',
  });

  const [files, setFiles] = useState({
    file: undefined,
    imagePreviewUrl: undefined,
  });

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
    let payload = new FormData();
    payload.append('reme_name', values.reme_name);
    payload.append('reme_desc', values.reme_desc);
    payload.append('reme_price', values.reme_price);
    payload.append('reme_reto_id', values.reme_reto_id);
    payload.append('reme_mety_name', values.reme_mety_name);
    const prodFile = files.file;
    prodFile && payload.append('uploadFile', prodFile);
    // add product via redux-saga
    dispatch(doAddRemeRequest(payload));
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
                  <div class='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label class='block text-sm font-medium text-gray-700'>
                      Resto Category
                    </label>
                    <select
                      class=' mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      defaultValue='Resto Category'
                      onChange={handleOnChange('resto')}
                    >
                      {reto &&
                        reto.map((el) => <option>{el.reto_name}</option>)}
                    </select>
                  </div>
                  <div class='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label class='block text-sm font-medium text-gray-700'>
                      Menu 
                    </label>
                    <select
                      class=' mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      defaultValue='Resto Category'
                      onChange={handleOnChange('resto')}
                    >
                      {mety &&
                        mety.map((el) => <option>{el.mety_name}</option>)}
                    </select>
                  </div>

                  <div className='col-span-6 sm:col-span-2 lg:col-span-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                    <div className='space-y-2 text-center'>
                      <div className='mx-auto h-48 w-24 text-gray-400'>
                        {uploaded === false ? (
                          <svg
                            className='mx-auto h-12 w-12 text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'
                          >
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        ) : (
                          <img
                            src={files.imagePreviewUrl}
                            alt='image'
                            className='mx-auto h-48 w-48'
                          />
                        )}
                      </div>
                      <div className='flex text-sm text-gray-600'>
                        <label
                          for='image'
                          className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                        >
                          <span>Upload a file</span>
                          <input
                            id='image'
                            accept='image/*'
                            name='image'
                            value={values.file}
                            onChange={uploadOnChange('file')}
                            type='file'
                            className='sr-only'
                          />
                        </label>
                      </div>
                      <div className='flex text-sm text-gray-600'>
                        <label
                          for='image'
                          className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                        >
                          <span className='ml-4' onClick={onClearImage}>
                            Remove
                          </span>
                        </label>
                      </div>
                    </div>
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
