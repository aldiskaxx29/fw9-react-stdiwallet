import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import samuel from '../assets/images/samuel.png'
import success from '../assets/images/success.png'
import { FiDownload, FiShare2 } from 'react-icons/fi'

export const StatusSuccess = () => {
  return (
    <>
        <Header/>
        <section className='wrap-section'>
            <Row className='px-2 px-md-5 mx-md-5'>
                <NavBoard/>
                <Col md={9} className='d-flex flex-column mt-3'>
                    <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                        <div className='w-100 text-center my-5'>
                            <img src={success} alt='success'/>
                            <p className="wrap-status-transfer my-5">Transfer Success</p>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p  className="wrap-type-confirm mb-1">Amount</p>
                                        <p className="wrap-name-confirm">Rp100.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p  className="wrap-type-confirm mb-1">Balance Left</p>
                                        <p className="wrap-name-confirm">Rp20.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p  className="wrap-type-confirm mb-1">Date & Time</p>
                                        <p className="wrap-name-confirm">May 11, 2020 - 12.20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p  className="wrap-type-confirm mb-1">Notes</p>
                                        <p className="wrap-name-confirm">For buying some socks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="wrap-title">Transfer to</h1>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <img src={samuel} className="img-home-prof" alt="samuel"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name-transfer">Samuel Suhi</p>
                                        <p  className="wrap-type">+62 813-8492-9994</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="d-md-flex justify-content-end">
                                <Link to='#'>
                                    <Button className="button-share my-2 my-md-5 me-3" type="submit"><FiShare2 className='navboard-icons me-3'/></Button>
                                </Link>
                                <Link to='#'>
                                    <Button className="button-download my-2 my-md-5 me-3" type="submit"><FiDownload className='navboard-icons me-3'/>Download</Button>
                                </Link>
                                <Link to='/home'>
                                    <Button className="auth-button my-2 my-md-5" type="submit">Continue</Button>
                                </Link>
                            </div>
                    </div>
                </Col>
            </Row>
        </section>
        <Footer/>
    </>
  )
}
