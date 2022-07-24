import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'

export const ChangePinNew = () => {
  return (
    <>
    <Header/>
    <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
            <NavBoard/>
            <Col md={9} className='d-flex flex-column mt-3'>
                <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                <h1 className="wrap-title mb-3">Change Pin</h1>
                    <p className='wrap-text'>Type your new 6 digits security PIN to use in Zwallet.</p>
                    <div className="d-flex-column mx-auto wrap-profile-list">
                        <Form className="d-flex flex-rows justify-content-around wrapper-pin mw-100 gap-2 pt-0 pt-md-5 mt-5">
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                            <div className="d-flex auth-border-pin">
                                <Form.Control maxlength="1" min="0" max="9" className="auth-pin" type="number"/>
                            </div>
                        </Form>
                    </div>
                        <div className="text-center wrap-button my-5">
                            <Link to='/profile'>
                                <Button className="button-insert">Change Pin</Button>
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
