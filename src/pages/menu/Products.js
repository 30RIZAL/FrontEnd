import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeading from '../../component/PageHeading';
import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  PhotographIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import config from '../../config/config';
import { useHistory, Link } from 'react-router-dom';
import {
  doGetRemeRequest,
  doDeleteRemeRequest,
} from '../../redux/actions/Reme';
import { doGetRetoRequest } from '../../redux/actions/Reto';

const columns = [
  { column: 'Name' },
  { column: 'Price' },
  { column: 'Description' },
  { column: '' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Products() {
  let history = useHistory();
  const dispatch = useDispatch();
  const productMenu = useSelector((state) => state.remeState.reme);

  const [isRefresh, setIsRefesh] = useState(false);

  useEffect(() => {
    fetchData();
    setIsRefesh(false);
  }, [isRefresh]);
  useEffect(() => {
    dispatch(doGetRetoRequest());
  }, []);
  async function fetchData() {
    const payload = {};
    dispatch(doGetRemeRequest(payload));
  }

  const onDelete = async (id) => {
    const payload = id;
    dispatch(doDeleteRemeRequest(payload));
    setIsRefesh(true);
  };

  return (
    <>
      <PageHeading
        actionTitle={'New Product'}
        onNewClick={() => history.push('/grab/seller/menu/AddProduct')}
      />
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full h-auto divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    {columns.map((col) => (
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        {col.column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {productMenu &&
                    productMenu.map((data) => (
                      <tr key={data.reme_id}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={`${config.urlImage}/${data.reme_url_image}`}
                                alt=''
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>
                                {data.reme_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            Rp.{' '}
                            {new Intl.NumberFormat('ID').format(
                              data.reme_price
                            )}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {data.reme_desc}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium '>
                          <Menu
                            as='div'
                            className='relative flex justify-end items-center '
                          >
                            {({ open }) => (
                              <>
                                <Menu.Button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                                  <span className='sr-only'>Open options</span>
                                  <DotsVerticalIcon
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                  />
                                </Menu.Button>
                                <Transition
                                  show={open}
                                  as={Fragment}
                                  enter='transition ease-out duration-100'
                                  enterFrom='transform opacity-0 scale-95'
                                  enterTo='transform opacity-100 scale-100'
                                  leave='transition ease-in duration-75'
                                  leaveFrom='transform opacity-100 scale-100'
                                  leaveTo='transform opacity-0 scale-95'
                                >
                                  <Menu.Items
                                    static
                                    className='mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
                                  >
                                    <div className='py-1'>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            to={`/grab/seller/menu/EditProduct/${data.reme_id}`}
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'group flex items-center px-4 py-2 text-sm'
                                            )}
                                          >
                                            <PencilAltIcon
                                              className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                              aria-hidden='true'
                                            />
                                            Edit
                                          </Link>
                                        )}
                                      </Menu.Item>

                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            to={`/hr/employee/upload/`}
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'group flex items-center px-4 py-2 text-sm'
                                            )}
                                          >
                                            <PhotographIcon
                                              className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                              aria-hidden='true'
                                            />
                                            Upload File Image
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    <div className='py-1'>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            to='#'
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'group flex items-center px-4 py-2 text-sm'
                                            )}
                                            onClick={() => {
                                              if (
                                                window.confirm(
                                                  'Delete this record ?'
                                                )
                                              )
                                                onDelete(data.reme_id);
                                            }}
                                          >
                                            <TrashIcon
                                              className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                              aria-hidden='true'
                                            />
                                            Delete
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </>
                            )}
                          </Menu>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
