import React from 'react';
import styles from './assets/Work.module.scss';
import logo from './assets/logo-symbol.svg';
import work1 from './assets/work1.png';
import work2 from './assets/work2.png';

export default function Work() {
  return (
    <div className={styles.works}>
      <div className={styles.workHeader}>
        <img src={logo} alt='' />
        <div>
          <p className={styles.numBout}>
            <span className={styles.numBout}>02</span> You may also like
          </p>
          <h1>Recent Works</h1>
          <p className={styles.introDesc}>
            Agency is a full-service agency, busy designing and building beautiful digital products,
            brands, and experiences.
          </p>
        </div>
      </div>
      <div className={styles.workPrev}>
        <div>
          <img src={work1} alt='' />
          <h4>Bento 3D Illustration</h4>
          <p>
            Agency is a full-service agency, busy designing and building beautiful digital products,
            brands, and experiences.
          </p>
        </div>
        <div className={styles.work2}>
          <img src={work2} alt='' />
          <h4>Bento Vol. 3</h4>
          <p>
            Agency is a full-service agency, busy designing and building beautiful digital products,
            brands, and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
