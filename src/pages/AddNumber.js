import React from 'react'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button, Alert } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiPhone } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import { addNumber, showProfile } from '../redux/asyncAction/profile'
import { resetMsgProf } from '../redux/reducer/profile'

const phoneSchema = Yup.object().shape({
  phone: Yup.string().min(11).max(15).required('You Must Input Indonesian Phone(+62)')
})

const AuthPhone = ({errors,handleSubmit,handleChange}) => {
  return(
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <div className="d-flex-column mx-auto wrap-profile-list">
          <Form.Group className="d-flex-column d-md-flex mt-5">
            <span className="auth-form"> <FiPhone className='d-none d-md-flex'/> </span>
            <Form.Control name='phone' onChange={handleChange} className="auth-form" type="text" placeholder="Type Your Number" isInvalid={!!errors.phone}/>
          </Form.Group>
          <span className='text-danger text-center'>{errors.phone}</span>
        </div>
        <div className="text-center wrap-button my-5">
          <Button className="button-insert" type='submit'>Add Number</Button>
        </div>
      </Form>
    </>
  )
}

export const AddNumber = () => {
  const regExp = /[a-zA-Z]/g;
  const dispatch = useDispatch()
  const token = useSelector((state=>state.auth.token))
  const successmsg = useSelector((state=>state.profile?.successmsg))
  const errormsg = useSelector((state=>state.profile?.errormsg))
  const reqPhone = (val) => {
    console.log(val.phone[0]===0);
    if (regExp.test(val.phone)) {
      window.alert('Input Only Mobile Phone Format')
    }else if(val.phone.includes('+62')){
      const request = {num_phone:val.phone}
      dispatch(addNumber({token,request}))
    }else{
      window.alert('Invalid Format Number')
    }
  }
  setTimeout(()=>dispatch(resetMsgProf()), 5 * 1000)
  React.useState(()=>{
    if (successmsg) {
      setTimeout(()=>dispatch(showProfile(token)), 5 * 1000)
    }
  },[successmsg])
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
              {errormsg?(
                <Alert className="sticky-top text-center" variant="danger">{errormsg}</Alert>
              ): null}
              {successmsg?(
                <Alert className="sticky-top text-center" variant="success">{successmsg}</Alert>
              ): null}
              <Formik validationSchema={phoneSchema} initialValues={{phone:''}} onSubmit={reqPhone}>
                {(props)=><AuthPhone{...props}/>}
              </Formik>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
