import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import { Menu, Transition } from '@headlessui/react';

import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  PhotographIcon,
} from '@heroicons/react/solid';
import LeadText from '@material-tailwind/react/LeadText';
import React, { useEffect, Fragment, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  doGetAddresRequest,
  doFindAddresRequest,
} from '../../redux/actions/Addres';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Content() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.userState);
  const user = useSelector((state) => state.userState.users);
  const { addres } = useSelector((state) => state.addresState);
  useEffect(() => {
    const payload = authUser.userId;
    dispatch(doGetAddresRequest(payload));
  }, []);
  
  const item = addres && addres.find(
    (a) => a.addr_user_id === authUser.userId
    
  )
  console.log(item);

  return (
    <section className='relative  '>
      <div className='container max-w-7xl px-4 mx-auto '>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl  '>
          <Menu as='div' className='relative flex justify-end items-center '>
            {({ open }) => (
              <>
                <Menu.Button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                  <span className='sr-only'>Open options</span>
                  <DotsVerticalIcon className='w-5 h-5' aria-hidden='true' />
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
                            to={`/grab/addres`}
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
                            Create Addres
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
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <div className='px-6'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                <div className='relative'>
                  <div className='group -m-2 p-2 flex items-center '>
                    <img
                      className=' w-52 h-52 bg-gray-300 rounded-full flex-shrink-0 -mt-24'
                      src='https://i.pinimg.com/564x/c4/88/92/c488927d8e8f3d43e30c3e4c1fdf9a60.jpg'
                      alt='Profile picture'
                      raised
                      rounded
                    />
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0'>
                <Button color='lightBlue' ripple='light'>
                  Conntect
                </Button>
              </div>
              <div className='w-full lg:w-4/12 px-4 lg:order-1'>
              </div>
            </div>

            <div className='text-center my-8'>
              <H3 color='gray'>{authUser.username || ''}</H3>
              <div className='mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2'>
                {authUser.email || ''}
              </div>
              <div className='mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2'>
                {authUser.numberPhone || ''}
              </div>
            </div>
           
                  <div className='mb-10 py-2 border-t border-gray-200 text-center'>
                    <div className='flex flex-wrap justify-center'>
                      <div className='w-full lg:w-9/12 px-4 flex flex-col items-center'>
                        <div className='mb-2 text-gray-700 flex items-center justify-center gap-2'>
                          {item.addr_name === undefined  ? item.addr_name === 'data belum ada' : item.addr_name}
                        </div>
                        <LeadText color='blueGray'>{item.addr_detail === undefined  ? item.addr_detail === 'data belum ada' : item.addr_detail}</LeadText>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                          <Button
                            color='lightBlue'
                            buttonType='link'
                            ripple='dark'
                          >
                            Show more
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                
          </div>
         
        </div>
      </div>
    </section>
  );
}
