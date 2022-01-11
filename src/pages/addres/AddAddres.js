import React, { useState, useEffect } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doRecaStarted } from '../../redux/actions/Reca';
import { doAddToAddresRequest } from '../../redux/actions/Addres';

export default function AddProduct(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const addres = useSelector((state) => state.addresState.reme);
  const { authUser } = useSelector((state) => state.userState);

  const [isRefresh, setIsRefesh] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  // load data category only once when page render
  useEffect(() => {
    setIsRefesh(false);
  }, [isRefresh]);

  const [values, setValues] = useState({
    addr_id: undefined,
    addr_name: undefined,
    addr_detail: undefined,
    addr_latitude: undefined,
    addr_longtitude: undefined,
    addr_user_id: undefined,
    error: '',
  });

  const [files, setFiles] = useState({
    file: undefined,
    imagePreviewUrl: undefined,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      addr_name: values.addr_name,
      addr_detail: values.addr_detail,
      addr_latitude: values.addr_latitude,
      addr_longtitude: values.addr_longtitude,
      addr_user_id: values.addr_user_id,
    };
    dispatch(doAddToAddresRequest(payload));
    window.history.back();
  };

  return (
    <section className='relative  '>
      <div className='container max-w-7xl px-4 mx-auto'>
        <div className='sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
          <div className=' py-52  '>
            <div>
              <p className='text-sm font-medium text-black'>Create Addres</p>
            </div>

            <div className='mt-6 relative'>
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'></span>
              </div>
            </div>

            <div className='mt-6'>
              <form action='#' method='POST' className='space-y-6'>
                <div>
                  <label htmlFor='name' className='sr-only'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={values.addr_name}
                    onChange={handleChange('addr_name')}
                    autoComplete='name'
                    placeholder='Name'
                    required
                    className='block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div>
                  <label htmlFor='mobile-or-email' className='sr-only'>
                    Addres Detail
                  </label>
                  <input
                    type='text'
                    name='Addres Detail'
                    id='Addres Detail'
                    value={values.addr_detail}
                    onChange={handleChange('addr_detail')}
                    autoComplete='Addres Detail'
                    placeholder='Addres Detail'
                    required
                    className='block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={onSubmit}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
