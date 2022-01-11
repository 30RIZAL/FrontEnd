/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { doGetRemeRequest } from '../redux/actions/Reme';
import { useSelector, useDispatch } from 'react-redux';
import {
  doGetCartRequest,
  doDeleteCartRequest,
  doUpdateCartRequest,
} from '../redux/actions/Cart';
import config from '../config/config';
import {} from '@heroicons/react/solid';
import { doAddOrderRequest } from '../redux/actions/Order';
import apiCart from '../api/api-cart';

// More products...
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Example(props) {
  let [close, setClose] = useState(false);
  const { cart } = useSelector((state) => state.cartState);
  const { reme } = useSelector((state) => state.remeState);
  const { authUser } = useSelector((state) => state.userState);
  const [isRefresh, setIsRefesh] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // You can await here
    const payload = authUser.userId;
    console.log(payload);
    dispatch(doGetCartRequest(payload));
  }, []);

  useEffect(() => {
    dispatch(doGetRemeRequest());
  }, []);

  const onUpdate = ({ reto_id, reme_id, minus, plus }) => {
    const payload = {
      user_id: authUser.userId,
      reto_id: parseFloat(reto_id),
      reme_id: parseFloat(reme_id),
      clit_qty: minus || plus,
    };
    dispatch(doUpdateCartRequest(payload));
  };
  let [values, setValues] = useState({
    id: undefined,
    totalItems: 0,
  });
  useEffect(() => {
    apiCart.findRow(authUser.userId).then((result) => {
      console.log(result);
      if (!result.data) {
        setValues({ ...values });
      } else {
        setValues({
          ...values,
          id: result.data.cart_id,
          totalItems: result.data.cart_line_items.length,
        });
      }
    });
  }, [authUser.userId]);
  let salary = 0;
  let total =
    cart.cart_line_items &&
    cart.cart_line_items.map((el) => parseInt(el.clit_sutotal));

  for (let i = 0; i < values.totalItems; i++) {
    salary += total[i] || 0;
  }

  const order = () => {
    const data = authUser.userId;
    dispatch(doAddOrderRequest(data));
  };

  const onDelete = async (id) => {
    const payload = id;
    dispatch(doDeleteCartRequest(payload));
    props.setIsOpen(false);
  };
  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden'
        onClose={() => null}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-medium text-gray-900'>
                        Shopping cart
                      </Dialog.Title>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={() => props.setIsOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='flow-root'>
                        <ul
                          role='list'
                          className='-my-6 divide-y divide-gray-200'
                        >
                          {cart.cart_line_items &&
                            cart.cart_line_items.map((product) => {
                              const item =
                                reme &&
                                reme.find(
                                  (a) => a.reme_id === product.clit_reme_id
                                );
                              return (
                                <li key={product.clit_id} className='py-6 flex'>
                                  <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
                                    <img
                                      src={`${config.urlImage}/${item.reme_url_image}`}
                                      alt={item.urlimage}
                                      className='w-full h-full object-center object-cover'
                                    />
                                  </div>

                                  <div className='ml-4 flex-1 flex flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3>
                                          <a>{item.reme_name}</a>
                                        </h3>
                                        <p className='ml-4'>
                                          Rp.{product.clit_sutotal}
                                        </p>
                                      </div>
                                    </div>
                                    <div className='flex-1 flex items-end justify-between text-sm'>
                                      <button
                                        onClick={() => {
                                          onUpdate({
                                            minus: product.clit_qty - 1,
                                            reme_id: item.reme_id,
                                            reto_id: item.reme_reto_id,
                                          });
                                        }}
                                        className={classNames(
                                          item.current
                                            ? 'bg-gray-900 text-gray-900'
                                            : 'text-black hover:text-gray-900 hover:bg-gray-500',
                                          'group flex items-center px-2 py-2  text-base leading-5 font-medium rounded-md'
                                        )}
                                      >
                                        -
                                      </button>
                                      <p className='text-black'>
                                        {product.clit_qty}
                                      </p>
                                      <button
                                        onClick={() => {
                                          onUpdate({
                                            plus: product.clit_qty + 1,
                                            reme_id: item.reme_id,
                                            reto_id: item.reme_reto_id,
                                          });
                                        }}
                                        className={classNames(
                                          item.current
                                            ? 'bg-gray-900 text-gray-900'
                                            : 'text-black hover:text-gray-900 hover:bg-gray-500',
                                          'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                                        )}
                                      >
                                        +
                                      </button>
                                      <div className='flex'>
                                        <button
                                          className='font-medium text-indigo-600 hover:text-indigo-500'
                                          onClick={() => {
                                            if (
                                              window.confirm('Delete record ?')
                                            )
                                              onDelete(product.clit_id);
                                          }}
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <p>Subtotal</p>
                      <p>
                        Rp.{new Intl.NumberFormat('ID').format(salary) || 0}
                      </p>
                    </div>
                    <p className='mt-0.5 text-sm text-gray-500'>
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className='mt-6'>
                      <a
                        href='/grab/order'
                        className='flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                        onClick={order}
                      >
                        Checkout
                      </a>
                    </div>
                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        or{' '}
                        <button
                          type='button'
                          className='text-indigo-600 font-medium hover:text-indigo-500'
                          onClick={() => props.seIstOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
