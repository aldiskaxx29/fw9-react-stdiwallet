import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import samuel from '../assets/images/samuel.png'
import { FiEdit2 } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import {useSelector, useDispatch} from 'react-redux'

export const TransferInput = () => {
  const amount = useSelector((state=>state.amount.amount))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Transfer</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title">Transfer money</h1>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={samuel} className="img-home-prof" alt="samuel"/>
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name-transfer">Samuel Suhi</p>
                      <p  className="wrap-type">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="wrap-text">Type the amount you want to transfer and then<br/>press continue to the next steps.</p>
              <Form>
                <Form.Group>
                  <div className="w-100 wrap-input">
                    <Form.Control type="number" className="wrap-amount text-center" placeholder={amount}/>
                    <p className="wrap-available">Rp120.000 Available</p>
                  </div>
                </Form.Group>
                <Form.Group className="d-flex w-50 m-auto my-3 my-md-5">
                  <span className="auth-form wrap-notes navboard-icons"><FiEdit2/></span>
                  <Form.Control type="text" className="text-center wrap-notes" placeholder="Add some notes"/>
                </Form.Group>
                <div className="d-md-flex justify-content-end">
                  <Link to='/pinConfirm'>
                    <Button className="btn auth-button w-100 my-5" type="submit">Continue</Button>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
