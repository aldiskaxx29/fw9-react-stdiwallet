import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'

export const PersonalInfo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Personal Info</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">Personal Info</h1>
              <p className='wrap-text'>We got your personal information from the sign<br/>up proccess. If you want to make changes<br/>on your information, contact our support.</p>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p  className="wrap-text mb-2">First Name</p>
                      <p className="wrap-name-confirm">Robert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p  className="wrap-text mb-2">Last Name</p>
                      <p className="wrap-name-confirm">Chandler</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p  className="wrap-text mb-2">Verified E-mail</p>
                      <p className="wrap-name-confirm">pewdiepie1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p  className="wrap-text mb-2">Phone Number</p>
                      <p className="wrap-name-confirm">+62 813-9387-7946</p>
                    </div>
                  </div>
                  <Link className="wrap-text" to="/manageNumber">
                    <p className="p-3">Manage</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
