import React, { Fragment, useEffect } from 'react';
import styles from '../../styles/components/nav/menu.module.css'

export default function MenuList({ }) {
    return (
        <div className={styles.navBarButtonsContainer}>
            <a className={styles.buttons} href="#landing">Home</a>
            <a className={styles.buttons}>News</a>
            <a className={styles.buttons}>Videos</a>
            <a className={styles.buttons}>Merch</a>
            <a className={styles.buttons}>Social Media</a>
            <a className={styles.buttons} href="#contact">Contact</a>
        </div>
    );
}