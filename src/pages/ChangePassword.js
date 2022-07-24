import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiLock } from 'react-icons/fi'

export const ChangePassword = () => {
  return (
    <>
    <Header/>
    <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
            <NavBoard/>
            <Col md={9} className='d-flex flex-column mt-3'>
                <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                <h1 className="wrap-title mb-3">Change Password</h1>
                    <p className='wrap-text'>You must enter your current password and then type your new password twice.</p>
                    <div className="d-flex-column mx-auto wrap-profile-list">
                    <Form>
                        <Form.Group className="d-flex mt-5">
                            <span className="auth-form"> <FiLock/> </span>
                            <Form.Control className="auth-form" type="password" placeholder="Current Password"/>
                        </Form.Group>

                        <Form.Group className="d-flex mt-5">
                            <span className="auth-form"> <FiLock/> </span>
                            <Form.Control className="auth-form" type="password" placeholder="New Password"/>
                        </Form.Group>

                        <Form.Group className="d-flex mt-5">
                            <span className="auth-form"> <FiLock/> </span>
                            <Form.Control className="auth-form" type="password" placeholder="Confirm New Password"/>
                        </Form.Group>
                    </Form>
                    </div>
                        <div className="text-center wrap-button my-5">
                            <Link to='/profile'>
                                <Button className="button-insert">Change Password</Button>
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
