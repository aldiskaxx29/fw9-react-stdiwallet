import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import samuel from '../assets/images/samuel.png'
import { Helmet } from 'react-helmet'
import {useSelector} from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup'

const pinSchema = Yup.object().shape({
  pin1: Yup.string().min(1).max(1).required(),
  pin2: Yup.string().min(1).max(1).required(),
  pin3: Yup.string().min(1).max(1).required(),
  pin4: Yup.string().min(1).max(1).required(),
  pin5: Yup.string().min(1).max(1).required(),
  pin6: Yup.string().min(1).max(1).required()
})

const AuthPin = ({errors,handleSubmit,handleChange}) => {
  const navigate = useNavigate()
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p className='wrap-text'>Enter your 6 digits PIN for confirmation to continue transferring money.</p>
          <div className="d-flex flex-rows justify-content-around wrapper-pin mw-100 gap-2 mt-5">
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin1' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text" isInvalid={!!errors.pin}/>
            </div>
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin2' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text"  isInvalid={!!errors.pin2}/>
            </div>
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin3' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text"  isInvalid={!!errors.pin3}/>
            </div>
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin4' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text"  isInvalid={!!errors.pin4}/>
            </div>
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin5' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text"  isInvalid={!!errors.pin5}/>
            </div>
            <div className="d-flex auth-border-pin">
              <Form.Control name='pin6' onChange={handleChange} maxLength="1" min="0" max="9" className="auth-pin" type="text"  isInvalid={!!errors.pin}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button name='button-cancel' onClick={()=>navigate('/statusFailed')} className='auth-button' type='submit'>Cancel</Button>
          <Button name='button-confirm' className='auth-button' type='submit'>Confirm</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

const MyModal = (props) => {
  const navigate = useNavigate()
  const pinRequest = (val) => {
    const pin = val.pin1+val.pin2+val.pin3+val.pin4+val.pin5+val.pin6
    const regExp = /^\d+$/;
    if(regExp.test(pin)){
      if (pin.length!==6) {
        window.alert('Pin Should Have 6 Digit')
      }else{
        navigate('/statusSuccess')
      }
    }else{
      window.alert('Input Only Number')
    }
  }
  return(
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Transfer</title>
      </Helmet>
      <Modal {...props} aria-labelledby="modal-pin" centered className='mx-auto'>
        <Modal.Header closeButton>
          <Modal.Title id="modal-pin" className='wrap-title'>
                Enter Pin to Transfer
          </Modal.Title>
        </Modal.Header>
        <Formik validationSchema={pinSchema} 
          initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:''}}
          onSubmit={pinRequest}>
          {(props)=><AuthPin{...props}/>}
        </Formik>
      </Modal>    
    </>
  )
}

export const TransferPinConfirm = () => {
  const [show, setShow] =React.useState(false);
  const amount = useSelector((state=>state.amount.value))
  const notes = useSelector((state=>state.notes.value))
  return (
    <>
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
              <p className="wrap-text-confirm">Details</p>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Amount</p>
                      <p className="wrap-name-confirm">Rp{amount}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Balance Left</p>
                      <p className="wrap-name-confirm">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Date & Time</p>
                      <p className="wrap-name-confirm">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Notes</p>
                      <p className="wrap-name-confirm">{notes}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-end">
                <Button className="auth-button my-5" onClick={()=>setShow(true)} type="submit">Continue</Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
      <MyModal show={show} onHide={()=>setShow(false)}/>
    </>
  )
}
