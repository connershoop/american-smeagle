
import React, { useState } from 'react'
import styles from './sidebar.module.sass'
const Products = () => {
    const [clothVisible, setClothVisible] = useState(true);
    return (
        <div class={`frow column-start ${styles.productSidebar}`}>

            <div>Now Trending</div>
            <div>Bottoms</div>
            <div>Item</div>
        </div>
    )
}

export default Products