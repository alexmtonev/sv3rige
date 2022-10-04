import React, { Fragment, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    window.onunload = () => {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Fragment>
      <div className={styles.container}>
        <div id="landing" className={styles.landingImageContainer}>
          <ul className={styles.sloganContainer}>
            <li>Bringing Nature Back To the Slave System (city) </li>
          </ul>
          <img src="/images/Sv3wev.jpg"/>
        </div>
      </div>
      <div className={styles.container}>
        <div id="contact" className={styles.news}>
        </div>
      </div>
    </Fragment>
  );
}
