
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/Footer'
import styles from './layout.module.sass'

const Layout = ({ children }) => {
    return (
        <div class={`frow column-start justify-between ${styles.layoutContainer}`}>
            <div>
                <Header />
                <div class={`${styles.layoutChildren}`}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout