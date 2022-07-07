import React from 'react';
import IntroImage from './assets/intro-image.png';
import styles from './assets/Intro.module.scss';
import { Button } from 'react-bootstrap';

export default function Intro() {
  return (
    <div className={styles.intros}>
      <div className={styles.leftSide}>
        <h1>Stand Out from The Crowd</h1>
        <p>
          Agency is a full-service agency, busy designing and building beautiful digital products,
          brands, and experiences.
        </p>
        <Button className={styles.navButton}>Recent Work</Button>{' '}
        <Button className={styles.scrollDown}>
          <div className={styles.arrowBg}>
            <svg
              width='20'
              height='22'
              viewBox='0 0 12 22'
              fill='none'
              className={styles.arrowDown}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1V14'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M1 14H11L6 21L1 14Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          Scroll Down
        </Button>{' '}
      </div>
      <img className={styles.introImg} src={IntroImage} alt='' />
    </div>
  );
}
