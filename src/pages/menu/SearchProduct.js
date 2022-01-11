import React, { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { doSearchRemeRequest } from '../../redux/actions/Reme';
import { useDispatch, useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SearchProduct() {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [values, setValues] = useState({
    search: undefined,
  });
  const dispatch = useDispatch();

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const enterSearchKey = (event) => {
    if (event.keyCode == 13) {
      event.preventDefault();
      alert(values.search);
    }
  };
//   const searching = (search, order) => {
//     let params = {};
//     if (search) {
//       params['cari'] = search;
//     }
//     if (order) {
//       params['order'] = order;
//     }
//     return params;
//   };

//   const onChangeSearch = (e) => {
//     const search = e.target.value;
//     setSearch(search.charAt(0).topUpperCase() + search.slice(1));
//   };

//   useEffect(() => {
//     const params = searching(search, order);
//     dispatch(doSearchRemeRequest(params));
//   }, [dispatch, search, order]);
  return (
    <div className='flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-center mt-5'>
      <div className='max-w-lg w-full lg:max-w-xs'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            id='search'
            name='search'
            value={values.search}
            onChange={handleOnChange('search')}
            className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Search'
            type='search'
            onKeyDown={enterSearchKey}
          />
        </div>
      </div>
    </div>
  );
}
