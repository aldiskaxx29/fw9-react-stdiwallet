import { Button, Col, Form, Row } from "react-bootstrap";
import { FiLock} from "react-icons/fi";
import React from 'react'
import Auth from "../component/Auth"
import { Link } from "react-router-dom";

const ForgotPasswordInsert = () => {
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
                    <p className="auth-text-form mt-5">Now you can create a new password for your STD iWallet account. Type your password twice so we can confirm your new passsword.</p>
                </div>
                <Form>
                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiLock/> </span>
                        <Form.Control className="auth-form" type="Password" placeholder="Create New Password"/>
                    </Form.Group>
                    <Form.Group className="d-flex mt-5">
                        <span className="auth-form"> <FiLock/> </span>
                        <Form.Control className="auth-form" type="Password" placeholder="Confirm New Password"/>
                    </Form.Group>
                </Form>
                <div>
                    <Link to="/login">
                        <Button className="auth-button w-100 mt-5" type="submit">Reset Password</Button>
                    </Link>
                </div>
            </div>
      </Col>
    </Row>
    </>
  )
}

export default ForgotPasswordInsert
