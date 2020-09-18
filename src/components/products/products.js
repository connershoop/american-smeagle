
import React from 'react'
import styles from './products.module.sass'
import Sidebar from './sidebar'
const Products = () => {
    return (
        <div class={`frow row justify-between ${styles.productsContainer}`}>
            <div class='col-md-1-4'>
                <Sidebar />
            </div>
            <div class='col-md-3-4'>
            </div>
        </div>
    )
}

export default Products