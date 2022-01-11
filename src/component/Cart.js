import React, { useEffect, useState, Fragment } from 'react';
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

export default function Example() {
  const [counter, setCounter] = useState(1);
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

  const onDelete = async (id) => {
    const payload = id;
    dispatch(doDeleteCartRequest(payload));
  };

  const onUpdate = ({ reto_id, reme_id, minus, plus }) => {
    const payload = {
      user_id: authUser.userId,
      reto_id: parseFloat(reto_id),
      reme_id: parseFloat(reme_id),
      clit_qty: minus || plus,
    };
    dispatch(doUpdateCartRequest(payload));
  };

  // let lines  =  cart.cart_line_items
  // let total =  lines && lines.map((el) => parseInt(el.clit_sutotal));
  // console.log(lines)
  // let salary = 0;
  // for (let index = 0; index < lines.length; index++) {
  //   salary += total[index];

  // }
  const order = () => {
    const data = authUser.userId;
    dispatch(doAddOrderRequest(data));
  };
  return (
    <body>
      <div class='container p-8 mx-auto mt-12'>
        {cart.cart_line_items &&
          cart.cart_line_items.map((product) => {
              <div class='w-full overflow-x-auto'>
                <div class='my-2'>
                  <h3 class='text-xl font-bold tracking-wider'>
                    Shopping Cart 3 item
                  </h3>
                </div>
                <table class='w-full shadow-inner'>
                  <thead>
                    <tr class='bg-gray-100'>
                      <th class='px-6 py-3 font-bold whitespace-nowrap'>
                        Image
                      </th>
                      <th class='px-6 py-3 font-bold whitespace-nowrap'>
                        Product
                      </th>
                      <th class='px-6 py-3 font-bold whitespace-nowrap'>Qty</th>
                      <th class='px-6 py-3 font-bold whitespace-nowrap'>
                        Price
                      </th>
                      <th class='px-6 py-3 font-bold whitespace-nowrap'>
                        Remove
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div class='flex justify-center'>
                          <img
                            src={`${config.urlImage}/${reme.reme_url_image}`}
                            alt={config.urlImage}
                            class='object-cover h-28 w-28 rounded-2xl'
                          />
                        </div>
                      </td>
                      <td class='p-4 px-6 text-center whitespace-nowrap'>
                        <div class='flex flex-col items-center justify-center'>
                          <h3>Iphone 11</h3>
                        </div>
                      </td>
                      <td class='p-4 px-6 text-center whitespace-nowrap'>
                        <div>
                          <button>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='inline-flex w-6 h-6 text-red-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </button>
                          <input
                            type='text'
                            name='qty'
                            value='2'
                            class='w-12 text-center bg-gray-100 outline-none'
                          />
                          <button>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='inline-flex w-6 h-6 text-green-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td class='p-4 px-6 text-center whitespace-nowrap'>
                        $1,000
                      </td>
                      <td class='p-4 px-6 text-center whitespace-nowrap'>
                        <button>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='w-6 h-6 text-red-400'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <div class='py-4 rounded-md shadow'>
                      <div class=' flex items-center  justify-between px-4 py-2 mt-3 border-t-2 '>
                        <span class='text-xl font-bold'>Total</span>
                        <span class='text-2xl font-bold'>$37.50</span>
                      </div>
                      <div class='mt-4'>
                        <button class='w-full py-2 text-center text-white bg-blue-500  rounded-md shadow hover:bg-blue-600'>
                          Proceed to Checkout
                        </button>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
            
          })}
      </div>
    </body>
  );
}
