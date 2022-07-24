import { Button, Col, Row } from "react-bootstrap";
import React from 'react'
import Auth from "../component/Auth"
import { Link } from "react-router-dom";
import success from "../assets/images/success.png"
import { Helmet } from "react-helmet";

const CreatePinSuccess = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Pin Created</title>
    </Helmet>
    <Row className="mw-100 mh-100 mx-0">
      <Auth/>
      <Col md={5} className='p-4 p-md-5'>
      <div className="d-flex-column me-0 me-md-5">
                <div>
                    <img src={success} alt="success"/>
                </div>
                <div>
                    <h1 className="auth-h1form mt-5">Your PIN Was Successfully Created</h1>
                </div>
                <div>
                    <p className="auth-text-form mt-5">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                </div>
                <div>
                    <Link to="/login">
                        <Button className="auth-button w-100" type="submit">Login Now</Button>
                    </Link>
                </div>
            </div>
      </Col>
    </Row>
    </>
  )
}

export default CreatePinSuccess
