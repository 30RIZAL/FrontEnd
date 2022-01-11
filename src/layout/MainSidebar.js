import {
    BellIcon,
    ShoppingCartIcon,
    HomeIcon
} from '@heroicons/react/solid';
import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Keranjang from '../component/Keranjang'

export default function MainSidebar(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            {/* Page title & actions */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="flex-1 min-w-0">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">{props.pageTitle}</h1>
                </div>
                <div className="mt-4 flex sm:mt-0 sm:ml-4">
                    <Link to="/grab/home"
                        type="button"
                        className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3"
                        onClick={props.onHome}
                    >
                        <HomeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </Link>

                    <button
                        type="button"
                        className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3"
                        onClick={() => setIsOpen(true)}
                    >
                        <ShoppingCartIcon className=" h-5 w-5 text-gray-500" aria-hidden="true" />
                    </button>



                    <button
                        type="button"
                        className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3"
                    >
                        <BellIcon className=" h-5 w-5 text-gray-500" aria-hidden="true" />
                    </button>
                </div>
            </div>
            {
                isOpen ? <Keranjang
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                /> : null
            }
            {props.children}
        </main>
    )
};

