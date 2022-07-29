import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'
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
  let notify = [errors.pin1,errors.pin2,errors.pin3,errors.pin4,errors.pin5,errors.pin6].join()
  notify===',,,,,'?notify=false:notify=true
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex-column mx-auto wrap-profile-list">
          <div className="d-flex flex-rows justify-content-around wrapper-pin mw-100 gap-2 pt-0 pt-md-5 mt-5">
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
        </div>
        <span hidden={!notify} className='text-danger text-center'>Input Pin</span>
        <div className="text-center wrap-button my-5">
          <Button className="button-insert" type='submit'>Continue</Button>
        </div>
      </Form>
    </>
  )
}

export const ChangePin = () => {
  const navigate = useNavigate()
  const pinRequest = (val) => {
    const pin = val.pin1+val.pin2+val.pin3+val.pin4+val.pin5+val.pin6
    const regExp = /^\d+$/;
    if(regExp.test(pin)){
      if (pin.length!==6) {
        window.alert('Pin Should Have 6 Digit')
      }else{
        navigate('/typeNewPin')
      }
    }else{
      window.alert('Input Only Number')
    }
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Pin</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">Change Pin</h1>
              <p className='wrap-text'>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
              <Formik validationSchema={pinSchema}
                initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:''}}
                onSubmit={pinRequest}>
                {(props)=><AuthPin{...props}/>}
              </Formik>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
