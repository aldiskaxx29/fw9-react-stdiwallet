import { Button, Col, Form, Row } from "react-bootstrap";
import { FiMail,FiLock,FiUser } from "react-icons/fi";
import React from 'react'
import Auth from "../component/Auth"
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup'
import { Helmet } from "react-helmet";

const signupSchema = Yup.object().shape({
    username: Yup.string().min(4).required('Required'),
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(4).required('Required')
})

const AuthSignUp = ({errors,handleChange,handleSubmit}) => {
    let lock = true
    lock = errors.email!==undefined||errors.password!==undefined||errors.username!==undefined
    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex mt-5">
                    <span className="auth-form"> <FiUser/> </span>
                    <div className="d-flex-column w-100">
                    <Form.Control name="username" onChange={handleChange} className="auth-form" type="text" placeholder="Enter Your Username" isInvalid={!!errors.username}/>
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex mt-5">
                    <span className="auth-form"> <FiMail/> </span>
                    <div className="d-flex-column w-100">
                        <Form.Control name="email" onChange={handleChange} className="auth-form" type="email" placeholder="Enter Your Email" isInvalid={!!errors.email}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </div>
                </Form.Group>

                <Form.Group className="d-flex mt-5">
                    <span className="auth-form"> <FiLock/> </span>
                    <div className="d-flex-column w-100">
                        <Form.Control name="password" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.password}/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </div>
                </Form.Group>
            <div>
                <Button disabled={lock} className="btn-primary auth-button w-100 mt-5" type="submit">Sign Up</Button>
            </div>
            </Form>
        </>
    )
}

const SignUp = () => {
    const navigate = useNavigate()
    const signUpRequest = (val) => {
        if(val.email===''&&val.password===''){
            window.alert('Write Your Email and Password')
        }else{
            navigate('/createPin',{replace: true})
        }
    }
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
    </Helmet>
    <Row className="mw-100 mh-100 mx-0">
      <Auth/>
      <Col md={5} className='p-4 p-md-5'>
      <div className="d-flex-column me-0 me-md-5">
                <div>
                    <h1 className="auth-h1form mt-2 mt-md-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
                </div>
                <div>
                    <p className="auth-text-form mt-5">Transfering money is eassier than ever, you can access STD iWallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                </div>
                <Formik validationSchema={signupSchema} initialValues={{username:'',email:'',password:''}} onSubmit={signUpRequest}>
                    {(props)=><AuthSignUp{...props}/>}
                </Formik>

                <div className="text-center">
                    <p className="mt-5">Don’t have an account? Let’s <Link to="/login">Log in</Link></p>
                </div>
            </div>
      </Col>
    </Row>
    </>
  )
}

export default SignUp