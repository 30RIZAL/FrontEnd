import AddAddres from './AddAddres';

import { HomeIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
export default function Profile(props) {
  return (
    <>
      <div className='absolute w-full z-20 '>
        <div
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            )`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Link
            to='/grab/home'
            type='button'
            className='order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3'
            onClick={props.onHome}
          >
            <HomeIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
          </Link>
          <main>
            <AddAddres />
          </main>
        </div>
      </div>
    </>
  );
}
