import React from 'react';
import styles from './assets/Agency.module.scss';
import './assets/carousel.scss'
import bg3d from './assets/bg-for-3d.png';
import logo from './assets/logo-symbol.svg';
import { Carousel } from 'react-bootstrap';
import slide01 from './assets/slide01.png';
import slide02 from './assets/slide02.png';
import slide03 from './assets/slide03.png';
import slide04 from './assets/slide04.png';
import slide05 from './assets/slide05.png';

export default function Agency() {
  return (
    <div className={styles.agency}>
      <img src={bg3d} alt='' className={styles.bg3d} />
      <div className={styles.agencyContent}>
        <div className={styles.agencyHeader}>
          <img src={logo} alt='' />
          <div>
            <p>
              <span className={styles.numBout}>03</span> Folio Agency
            </p>
            <h1>By the Numbers.</h1>
          </div>
        </div>
        <div className={styles.agencyItem}>
          <div className={`${styles.agencyCont} ${styles.leftItem}`}>
            <h1>20</h1>
            <h5>Pre-build Scenes 🔥</h5>
            <p>
              Bento is the first fully editable, 3D visual design system with global auto-updatable
              style guides built right in Figma.
            </p>
            <a href='' className={styles.download}>
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
              Download
            </a>
          </div>
          <div className={`${styles.agencyCont} ${styles.rightItem}`}>
            <h1>
              40<sup>+</sup>
            </h1>
            <h5>Scene Objects</h5>
            <p>
              Bento is the first fully editable, 3D visual design system with global auto-updatable
              style guides built right in Figma.
            </p>
            <a href='' className={styles.download}>
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
              Download
            </a>
          </div>
        </div>
        <Carousel indicators='false'>
          <Carousel.Item>
            <img className='d-block' src={slide01} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={slide02} alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={slide03} alt='Third slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={slide04} alt='Fourth slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block center' src={slide05} alt='Fifth slide' />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
