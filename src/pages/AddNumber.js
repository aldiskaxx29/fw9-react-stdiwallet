import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiPhone } from 'react-icons/fi'
import { Helmet } from 'react-helmet'

export const AddNumber = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Number</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">Add Phone Number</h1>
              <p className='wrap-text'>Add at least one phone number for the transfer<br/>ID so you can start transfering your money to <br/>another user..</p>
              <div className="d-flex-column mx-auto wrap-profile-list">
                <Form >
                  <Form.Group className="d-flex mt-5">
                    <span className="auth-form"> <FiPhone/> </span>
                    <Form.Control className="auth-form" type="text" placeholder="Type Your Number"/>
                  </Form.Group>
                </Form>
              </div>
              <div className="text-center wrap-button my-5">
                <Link to='/personalInfo'>
                  <Button className="button-insert">Add Number</Button>
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
