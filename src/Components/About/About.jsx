import React from 'react';
import styles from './assets/About.module.scss';
import bg3d from './assets/bg-for-3d.png';
import logo from './assets/logo-symbol.svg';

export default function About() {
  return (
    <div className={styles.abouts}>
      <img src={bg3d} alt='' className={styles.bg3d} />
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader}>
          <img src={logo} alt='' />
          <div>
            <p>
              <span className={styles.numBout}>01</span> Who We Are
            </p>
            <h1>We Make Designs that Lead and Inspire.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
