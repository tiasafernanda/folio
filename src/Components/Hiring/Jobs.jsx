import React from 'react';
import styles from './assets/Jobs.module.scss';
import logo from './assets/logo-symbol.svg';
import { ListGroup } from 'react-bootstrap';
import arrowRight from './assets/arrow-right.svg';
import './assets/ListGroup.scss';

export default function Jobs() {
  return (
    <div className={styles.jobs}>
      <div className={styles.jobContent}>
        <div className={styles.jobHeader}>
          <img src={logo} alt='' />
          <div>
            <p className={styles.headerDesc}>
              <span className={styles.numBout}>03</span> We are hiring
            </p>
            <h1>Jobs</h1>
            <p className={styles.jobDesc}>
              Agency is a full-service agency, busy designing and building beautiful digital
              products, brands, and experiences.
            </p>
            <a href='' className={styles.workNav}>
              <div className={styles.arrowBg}>
                <svg
                  width='22'
                  height='12'
                  viewBox='0 0 22 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={styles.arrowRight}
                >
                  <path
                    d='M1 6L14 6'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14 11V1L21 6L14 11Z'
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
        <div className={styles.jobList}>
          <ListGroup defaultActiveKey='#link1'>
            <ListGroup.Item action href='#link1'>
              <h5>
                Graphic Designer <span className={styles.bubble}>2</span>
              </h5>
              <p>2 years experience</p>
              <svg
                width='22'
                height='16'
                viewBox='0 0 22 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 8L21 8'
                  stroke='#232340'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14 1L21 8L14 15'
                  stroke='#232340'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </ListGroup.Item>
            <ListGroup.Item action href='#link2'>
              <h5>Visual Designer</h5>
              <p>2 years experience</p>
              <img src={arrowRight} alt='arrow-right' className={styles.Right} />
            </ListGroup.Item>
            <ListGroup.Item action href='#link3'>
              <h5>Art Director</h5>
              <p>2 years experience</p>
              <img src={arrowRight} alt='arrow-right' className={styles.arrowRight} />
            </ListGroup.Item>
            <ListGroup.Item action href='#link4'>
              <h5>
                Web Designer <span className={styles.bubble}>6</span>
              </h5>
              <p>2 years experience</p>
              <img src={arrowRight} alt='arrow-right' className={styles.arrowRight} />
            </ListGroup.Item>
          </ListGroup>
          ,
        </div>
      </div>
    </div>
  );
}
