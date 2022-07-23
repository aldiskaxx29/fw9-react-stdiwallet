import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Form, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import michel from '../assets/images/Rectangle 25.png'
import samuel from '../assets/images/samuel.png'
import momotaro from '../assets/images/momotaro.png'
import jessica from '../assets/images/jessica.png'

export const Transfer = () => {
  return (
    <>
    <Header/>
        <section className='wrap-section'>
            <Row className='px-2 px-md-5 mx-md-5'>
                <NavBoard/>
                <Col md={9} className='d-flex flex-column mt-3'>
                    <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                    <h1 className="wrap-title">Search Receiver</h1>
                        <Form>
                            <Form.Group className="d-flex mt-4">
                                <span className="wrap-search rounded-start"> <FiSearch className='ms-2'/> </span>
                                <Form.Control className="wrap-search rounded-end" type="email" placeholder="Search Receiver"/>
                            </Form.Group>
                        </Form>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <Link to='/transferInput' className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <img src={samuel} className="img-home-prof" alt="samuel"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name-transfer">Samuel Suhi</p>
                                        <p  className="wrap-type">+62 813-8492-9994</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <Link to='/transferInput' className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <img src={momotaro} className="img-home-prof" alt="momotaro"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name-transfer">Momo Taro</p>
                                        <p  className="wrap-type">+62 812-4343-6731</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <Link to='/transferInput' className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <img src={jessica} className="img-home-prof" alt="jessica"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name-transfer">Jessica Keen</p>
                                        <p  className="wrap-type">+62 811-3452-5252</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3">
                            <Link to='/transferInput' className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <img src={michel} className="img-home-prof" alt="michel"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name-transfer">Michael Le</p>
                                        <p  className="wrap-type">+62 810-4224-4613</p>
                                    </div>
                                </div>
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
