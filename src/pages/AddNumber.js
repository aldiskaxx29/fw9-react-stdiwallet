import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiPhone } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import { addPhone } from '../redux/asyncAction/phone'

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
  const navigate = useNavigate()
  const regExp = /[a-zA-Z]/g;
  const dispatch = useDispatch()
  const token = useSelector((state=>state.auth.token))
  const successmsg = useSelector((state=>state.addNumber.successmsg))
  const reqPhone = (val) => {
    console.log(val.phone[0]===0);
    if (regExp.test(val.phone)) {
      window.alert('Input Only Mobile Phone Format')
    }else if((val.phone[0]==='0'&&val.phone[1]==='8')||val.phone.includes('+62')){
      dispatch(addPhone({token,num_phone:val.phone}))
      navigate('/personalInfo')
    }else{
      window.alert('Invalid Format Number')
    }
  }

  React.useState(()=>{
    if (successmsg) {
      window.alert(successmsg)
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
