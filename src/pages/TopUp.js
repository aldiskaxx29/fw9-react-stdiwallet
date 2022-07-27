import React from 'react'
import {Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'

export const TopUp = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Up</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">How To Top Up</h1>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">1</span>Go to the nearest ATM or you can use E-Banking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">2</span>Type your security number on the ATM or E-Banking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">3</span >Select “Transfer” in the menu </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">4</span>Type the virtual account number that we provide you at the top.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">5</span>Type the amount of the money you want to top up.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">6</span>Read the summary details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">7</span>Press transfer / top up</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">8</span>You can see your money in STD iWallet within 3 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
