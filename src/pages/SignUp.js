import { Button, Col, Form, Row } from "react-bootstrap";
import { FiMail,FiLock,FiUser } from "react-icons/fi";
import React from 'react'
import Auth from "../component/Auth"
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <Row className="mw-100 mh-100 mx-0">
      <Auth/>
      <Col md={5} className='p-4 p-md-5'>
      <div className="d-flex-column me-0 me-md-5">
                <div>
                    <h1 className="auth-h1form mt-2 mt-md-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
                </div>
                <div>
                    <p className="auth-text-form mt-5">Transfering money is eassier than ever, you can access STD iWallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                </div>
                <Form>
                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiUser/> </span>
                        <Form.Control className="auth-form" type="text" placeholder="Enter Your Username"/>
                    </Form.Group>

                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiMail/> </span>
                        <Form.Control className="auth-form" type="email" placeholder="Enter Your Email"/>
                    </Form.Group>

                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiLock/> </span>
                        <Form.Control className="auth-form" type="password" placeholder="Enter Your Password"/>
                    </Form.Group>
                </Form>
                <div>
                    <Link to="/createPin">
                        <Button className="btn-primary auth-button w-100 mt-5" type="submit">Sign Up</Button>
                    </Link>
                </div>
                <div className="text-center">
                    <p className="mt-5">Don’t have an account? Let’s <Link to="/login">Log in</Link></p>
                </div>
            </div>
      </Col>
    </Row>
    </>
  )
}

export default SignUp