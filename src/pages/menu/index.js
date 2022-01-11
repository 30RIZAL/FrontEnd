import React from 'react'
import  AddProduct  from './AddProduct'
import  ProductList  from './ProductList'
import  Product  from './Products'
import  SearchProduct  from './SearchProduct'
export default function index() {
    return (
        <div>
            <SearchProduct/>
            <Product/>
        </div>
    )
}
