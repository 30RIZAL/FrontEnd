import React from 'react'
import MenuList from '../menu/ProductList'
import SearchMenu from '../menu/SearchProduct'

export default function Home() {
    return (
        <div>
            <SearchMenu />
            <MenuList />
        </div>
    )
}
