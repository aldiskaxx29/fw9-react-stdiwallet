import { Button, Col, Form, Row } from 'react-bootstrap';
import React from 'react'
import Auth from '../component/Auth'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CreatePin = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Pin</title>
      </Helmet>
      <Row className="mw-100 mh-100 mx-0">
        <Auth/>
        <Col md={5} className='p-4 p-md-5'>
          <div className="d-flex-column me-0 me-md-5">
            <div>
              <h1 className="auth-h1form mt-2 mt-md-5">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h1>
            </div>
            <div>
              <p className="auth-text-form mt-5">Create 6 digits pin to secure all your money and your data in STD iWallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
            </div>
            <Form className="d-flex flex-rows justify-content-around wrapper-pin mw-100 gap-2 mt-5">
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
            <div>
              <Link to="/createPinSuccess">
                <Button className="auth-button w-100 mt-5" type="submit">Confirm</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CreatePin
