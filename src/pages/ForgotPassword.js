import { Button, Col, Form, Row } from 'react-bootstrap';
import { FiMail} from 'react-icons/fi';
import React from 'react'
import Auth from '../component/Auth'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Helmet } from 'react-helmet';

const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required')
})

const AuthEmail = ({errors,handleChange,handleSubmit}) =>{
  const lock = errors.email===undefined&&errors.password===undefined
  return(
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="d-flex mt-5">
          <span className="auth-form"> <FiMail/> </span>
          <div className="d-flex-column w-100">
            <Form.Control name="email" onChange={handleChange} className="auth-form" type="email" placeholder="Enter Your Email" isInvalid={!!errors.email}/>
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </div>
        </Form.Group>
        <div className="text-end mt-2">
          <Link to="/forgotPassword">Forgot password?</Link>
        </div>
        <div>
          <Link to="/forgotPasswordInsert">
            <Button disabled={!lock} className="btn-primary auth-button w-100 mt-5" type="submit">Confirm</Button>
          </Link>
        </div>
      </Form>
    </>
  )
}

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Passsword</title>
      </Helmet>
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
            <Formik validationSchema={emailSchema} initialValues={{email:''}}>
              {(props)=><AuthEmail {...props}/>}
            </Formik>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ForgotPassword
