import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { connect } from 'react-redux';
import {toast } from 'react-toastify';
import {doFindReca, doUpdateRecaRequest, } from '../../redux/actions/Reca'
import { findRecaById } from '../../redux/selectors/Reca'

export default function EditCategory(props) {


    const [values, setValues] = useState({
        reca_name: '',
        reca_desc: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    useEffect(() => {
        const { reca_name, reca_desc } =props.categorySelected
        setValues({...values,reca_name:reca_name,reca_desc:reca_desc})
        
    }, [props.action.id])

    const onSubmit= async ()=>{
        const data ={
            reca_name : values.reca_name,
            reca_desc : (values.reca_desc).toUpperCase() ||''
        }
        
    }

    return (

        <Transition appear show={props.isEditOpen} as={Fragment}>
            <Dialog
                as="div"
                static
                initialFocus={null}
                onClose={() => null}
                className="fixed inset-0 z-10 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Edit Category
                            </Dialog.Title>
                            <div className="mt-2">

                                <form action="#" method="POST">
                                    <div className="col-span-6 sm:col-span-3">
                                    
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Category Name
                                        </label>
                                        <input
                                            type="text"
                                            name="reca_desc"
                                            value={values.reca_desc}
                                            onChange={handleChange('reca_desc')}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                        />

                                        
                                    </div>
                                </form>
                            </div>

                            <div className="flex flex-row space-x-4 mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={onSubmit}
                                >
                                    Submit
                                </button>
                                <button type="button" 
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={props.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}


