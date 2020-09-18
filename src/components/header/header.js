import React from 'react'
import {
    Link
} from "react-router-dom";
import styles from "./header.module.sass"
import Gollum from '../../resources/Gollum_Render.png'; // Tell webpack this JS file uses this image

const Header = () => {
    return <div class={`frow row-between content-centered px-100 ${styles.headerContainer}`}>
        <div class="frow row-around">
            <Link to="/"><img class={`${styles.gollumImage}`} src={Gollum} alt="gollum" /></Link>
            <div class={` mx-50 ${styles.headerAmericanSmeagle}`}>AMERICAN SMEAGLE</div>
        </div>

        <Link class={`${styles.headerLink}`} to="/products">Products</Link>

    </div>
}

export default Header