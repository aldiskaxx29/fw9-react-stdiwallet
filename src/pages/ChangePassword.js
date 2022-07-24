import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiLock } from 'react-icons/fi'
import { Formik } from "formik";
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'

const passwordSchema = Yup.object().shape({
    currentpassword:Yup.string().required('Required'),
    password: Yup.string().min(4).required('Required'),
    newpassword: Yup.string().min(4).required('Required')
})

const AuthPassword = ({errors,handleChange,handleSubmit}) =>{
    const lock = errors.email===undefined&&errors.password===undefined
    return(
        <>
        <div className="d-flex-column mx-auto wrap-profile-list">
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="d-flex mt-5">
                <span className="auth-form"> <FiLock/> </span>
                <div className="d-flex-column w-100">
                    <Form.Control name="currentpassword" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.currentpassword}/>
                    <Form.Control.Feedback type="invalid">{errors.currentpassword}</Form.Control.Feedback>
                </div>
            </Form.Group>

            <Form.Group className="d-flex mt-5">
                <span className="auth-form"> <FiLock/> </span>
                <div className="d-flex-column w-100">
                    <Form.Control name="password" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </div>
            </Form.Group>

            <Form.Group className="d-flex mt-5">
                <span className="auth-form"> <FiLock/> </span>
                <div className="d-flex-column w-100">
                    <Form.Control name="newpassword" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.newpassword}/>
                    <Form.Control.Feedback type="invalid">{errors.newpassword}</Form.Control.Feedback>
                </div>
            </Form.Group>
            </Form>
        </div>
            <div className="text-center wrap-button my-5">
                <Link to='/profile'>
                    <Button disabled={!lock} className="button-insert">Change Password</Button>
                </Link>
            </div>
    </>
    )
}

export const ChangePassword = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password</title>
    </Helmet>
    <Header/>
    <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
            <NavBoard/>
            <Col md={9} className='d-flex flex-column mt-3'>
                <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                <h1 className="wrap-title mb-3">Change Password</h1>
                    <p className='wrap-text'>You must enter your current password and then type your new password twice.</p>
                    <Formik validationSchema={passwordSchema} initialValues={{currentpassword:'',password:'',newpassword:''}}>
                    {(props)=><AuthPassword{...props}/>}
                    </Formik>
                </div>
            </Col>
        </Row>
    </section>
    <Footer/>
    </>
  )
}
