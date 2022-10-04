import React, { Fragment, useEffect } from "react";
import styles from '../../styles/components/nav/menu.module.css'

export default function Navigator({ children }) {

    useEffect(() => {
        window.onscroll = () => {
            let navibar = document.getElementById('navibar');

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                // add padding
                navibar.style.padding = "0.5rem 2rem";
                navibar.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }
            else {
                navibar.style.padding = "1.5rem 2rem";
                navibar.style.backgroundColor = "transparent";
            }
        };
    }, []);

    return (
        <Fragment>
            <nav id="navibar" className={styles.nav}>
                <a href="/" className={styles.brandmark}>sv3rige</a>
                {children}
            </nav>
        </Fragment>
    ); 
}