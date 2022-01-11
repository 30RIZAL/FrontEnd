import React, { useEffect } from 'react';
import { doGetRemeRequest, doFindRemeRequest } from '../../redux/actions/Reme';
import { doAddToCartRequest } from '../../redux/actions/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import config from '../../config/config';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.remeState.reme);
  const { authUser } = useSelector((state) => state.userState);

  useEffect(() => {
    const payload = {};
    dispatch(doGetRemeRequest(payload));
  }, []);
  const addToCart = ({ reto_id, reme_id }) => {
    const data = {
      user_id: authUser.userId,
      reto_id: parseFloat(reto_id),
      reme_id: parseFloat(reme_id),
      clit_qty: 1,
    };
    dispatch(doAddToCartRequest(data));
  };
console.log(products);
  return (
    <div class='bg-white'>
      <div class='max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div class='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products &&
            products.map((reme) => (
              <div class='group relative'>
                <div class='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                  <img
                    src={`${config.urlImage}/${reme.reme_url_image}`}
                    alt='Front of men&#039;s Basic Tee in black.'
                    class='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div class='mt-4 flex justify-between'>
                  <div>
                    <h3 class='text-sm text-gray-700'>
                      <Link to='/grab/'>
                        <span aria-hidden='true' class='absolute'></span>
                        {reme.reme_name}
                      </Link>
                    </h3>
                    <p class='mt-1 text-sm text-gray-500'>{reme.reme_desc}</p>
                  </div>
                  <p class='text-xs font-medium text-gray-900'>
                    Rp. {new Intl.NumberFormat('ID').format(reme.reme_price)}
                  </p>
                </div>
                <div className='flex'>
                  <button
                    type='button'
                    className='flex-1 mt-3 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500'
                    onClick={() => {
                      addToCart({
                        reme_id: reme.reme_id,
                        reto_id: reme.reme_reto_id,
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
