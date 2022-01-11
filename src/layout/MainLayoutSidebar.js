import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  ClipboardListIcon,
  BellIcon,
  SelectorIcon,
  ChatIcon,
  CollectionIcon,
  CreditCardIcon,
  ViewGridAddIcon,
  CashIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainSidebar from './MainSidebar';
import { doSignoutRequest } from '../redux/actions/User';

const navigation = [
  
  {
    name: 'Dashboard',
    href: '/grab/seller/dashboard',
    icon: HomeIcon,
    current: false,
  },
  {
    name: 'Category',
    href: '/grab/seller/category',
    icon: ClipboardListIcon,
    current: false,
  },
  {
    name: 'Menu',
    href: '/grab/seller/menu',
    icon: ViewGridAddIcon,
    current: false,
  },
  {
    name: 'Orders',
    href: '/grab/seller/order',
    icon: CollectionIcon,
    current: false,
  },
  {
    name: 'Account Payment',
    href: '/grab/seller/account',
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: 'Transaction Payment',
    href: '/grab/seller/payment',
    icon: CashIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainLayoutSidebar(props) {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const onLogout = () => {
    const payload = {};
    dispatch(doSignoutRequest(payload));
    setRedirect(true);
  };

  const { profile } = useSelector((state) => state.userState);

  if (redirect) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className='h-screen flex overflow-hidden bg-white'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 flex z-40 lg:hidden'
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <Link to='/grab/'>
                  <img
                    className='h-8 w-auto'
                    src='https://www.jagadiri.co.id/assets/egift/grabfood-695b8795641177875daa2050a523869e852c824183f1cb352ca49a2c877e174f.png'
                    alt='eshopay'
                  />
                </Link>
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2'>
                  <div className='space-y-1'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                          'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100'>
          <div className='flex items-center flex-shrink-0 px-6'>
            <span className='flex min-w-0 items-center justify-between space-x-3'>
              <Link to='/'>
                <img
                  className='h-8 w-auto'
                  src='https://www.jagadiri.co.id/assets/egift/grabfood-695b8795641177875daa2050a523869e852c824183f1cb352ca49a2c877e174f.png'
                />
              </Link>
              <span className='flex-1 flex flex-col min-w-0'></span>
            </span>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='h-0 flex-1 flex flex-col overflow-y-auto'>
            {/* User account dropdown */}
            <Menu
              as='div'
              className='px-3 mt-6 relative inline-block text-left'
            >
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'>
                      <span className='flex w-full justify-between items-center'>
                        <span className='flex min-w-0 items-center justify-between space-x-3'>
                          <img
                            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                            src='https://i.pinimg.com/564x/b6/14/04/b61404f19da47d0626257462de0b8a4a.jpg'
                            alt=''
                          />
                          <p className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                            {profile ? profile.username : ''}
                          </p>
                          <span className='flex-1 flex flex-col min-w-0'>
                            <span className='text-gray-900 text-sm font-medium truncate'></span>
                            <span className='text-gray-500 text-sm truncate'></span>
                          </span>
                        </span>
                        <SelectorIcon
                          className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                          aria-hidden='true'
                        />
                      </span>
                    </Menu.Button>
                  </div>
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
                      className='z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
                    >
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to='/grab/seller/profile'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              View profile
                            </Link>
                          )}
                        </Menu.Item>
                      </div>

                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to='#'
                              onClick={onLogout}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

            {/* Navigation */}
            <nav className='px-3 mt-6'>
              <div className='space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        {/* Search header */}
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
          <button
            className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 flex justify-between px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center'>
              {/* Profile dropdown */}
              <Menu as='div' className='ml-3 relative'>
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://i.pinimg.com/564x/b6/14/04/b61404f19da47d0626257462de0b8a4a.jpg'
                          alt=''
                        />
                        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                          {profile ? profile.username : ''}
                        </span>
                      </Menu.Button>
                    </div>
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
                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
                      >
                        <div className='py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/grab/seller/profile'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                View profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        </div>

                        <div className='py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='#'
                                onClick={onLogout}
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Logout
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
        <MainSidebar
          pageTitle={props.pageTitle}
          onShopping={() => history.push('/')}
        >
          {children}
        </MainSidebar>
      </div>
    </div>
  );
}
