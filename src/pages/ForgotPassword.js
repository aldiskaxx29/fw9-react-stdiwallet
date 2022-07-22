import { Button, Col, Form, Row } from "react-bootstrap";
import { FiMail} from "react-icons/fi";
import React from 'react'
import Auth from "../component/Auth"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
    <Row className="mw-100 mh-100 mx-0">
      <Auth/>
      <Col md={5} className='p-4 p-md-5'>
      <div className="d-flex-column me-0 me-md-5">
                <div>
                    <h1 className="auth-h1form mt-2 mt-md-5">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h1>
                </div>
                <div>
                    <p className="auth-text-form mt-5">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                </div>
                <Form>
                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiMail/> </span>
                        <Form.Control className="auth-form" type="email" placeholder="Enter Your Email"/>
                    </Form.Group>
                </Form>
                <div>
                    <Link to="/forgotPasswordInsert">
                        <Button className="btn-primary auth-button w-100 mt-5" type="submit">Confirm</Button>
                    </Link>
                </div>
            </div>
      </Col>
    </Row>
    </>
  )
}

export default ForgotPassword
