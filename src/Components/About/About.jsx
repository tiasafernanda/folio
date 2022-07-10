import React from 'react';
import styles from './assets/About.module.scss';
import bg3d from './assets/bg-for-3d.png';
import logo from './assets/logo-symbol.svg';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
// import tab1 from './assets/tab-content01.png';
// import tab2 from './assets/tab-content02.png';
// import tab3 from './assets/tab-content03.png';
// import tab4 from './assets/tab-content04.png';
// import tab5 from './assets/tab-content05.png';
import './assets/Tab.css';
import tabContents from './tab';

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
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <div className={styles.tabContainers}>
                <Nav variant='pills' className='flex-column'>
                  {tabContents.map((yearData) => (
                    <>
                      <Nav.Item>
                        <Nav.Link eventKey={yearData.order}>{yearData.year}</Nav.Link>
                      </Nav.Item>
                    </>
                  ))}
                </Nav>
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content className={styles.tabContents}>
                {tabContents.map((tabData) => (
                  <>
                    <Tab.Pane eventKey={tabData.order} className={styles.tabContent01}>
                      <img src={tabData.img} alt={tabData.alt} />
                      <div className={styles.contentText}>
                        <div>
                          <h1 className={styles.tabTitle}>{tabData.title}</h1>
                          <p className={styles.tabDesc}>{tabData.description}</p>
                          <a href='#contact'>Contact Us</a>
                        </div>
                        <div className={styles.tabDate}>
                          <div>
                            <p className={styles.dates}>
                              <span className={styles.dateNum}>{tabData.date}</span>
                              <br />
                              {tabData.month}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </>
                ))}
                {/* <Tab.Pane eventKey='first' className={styles.tabContent01}>
                  <img src={tab1} alt='' />
                  <div className={styles.contentText}>
                    <div>
                      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, beatae
                        nisi.
                      </p>
                      <a href=''>Contact Us</a>
                    </div>
                    <p>
                      <span>28</span>
                      <br />
                      Lorem Ipsum
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='second' className={styles.tabContent02}>
                  <img src={tab2} alt='' />
                  <div>
                    <div>
                      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, beatae
                        nisi.
                      </p>
                      <a href=''>Contact Us</a>
                    </div>
                    <p>
                      <span>28</span>
                      <br />
                      Lorem Ipsum
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='third' className={styles.tabContent03}>
                  <img src={tab3} alt='' />
                  <div>
                    <div>
                      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, beatae
                        nisi.
                      </p>
                      <a href=''>Contact Us</a>
                    </div>
                    <p>
                      <span>28</span>
                      <br />
                      Lorem Ipsum
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth' className={styles.tabContent04}>
                  <img src={tab4} alt='' />
                  <div>
                    <div>
                      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, beatae
                        nisi.
                      </p>
                      <a href=''>Contact Us</a>
                    </div>
                    <p>
                      <span>28</span>
                      <br />
                      Lorem Ipsum
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth' className={styles.tabContent05}>
                  <img src={tab5} alt='' />
                  <div>
                    <div>
                      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, beatae
                        nisi.
                      </p>
                      <a href=''>Contact Us</a>
                    </div>
                    <p>
                      <span>28</span>
                      <br />
                      Lorem Ipsum
                    </p>
                  </div>
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
