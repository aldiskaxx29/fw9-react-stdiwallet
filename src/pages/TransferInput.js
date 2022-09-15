import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiEdit2 } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import { costumAmount,costumNotes,costumDateTransfer } from '../redux/reducer/transfer'
import defaultimg from '../assets/images/default.png'
import { getToken } from '../redux/asyncAction/token'

const amountSchema = Yup.object().shape({
  amount: Yup.number().min(1).required('Required'),
})

const AuthAmoount = ({errors, handleSubmit, handleChange})=>{
  const profile = useSelector((state=>state.profile.value))
  return(
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group>
        <div className="w-100 wrap-input">
          <Form.Control name='amount' onChange={handleChange} type="number" className="wrap-amount text-center" placeholder='0.00' isInvalid={!!errors.amount}/>
          <Form.Control.Feedback>{errors.amount}</Form.Control.Feedback>
          <p className="wrap-available">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(parseInt(profile?.balance))} Available</p>
        </div>
      </Form.Group>
      <Form.Group className="d-flex w-50 m-auto my-3 my-md-5">
        <span className="auth-form wrap-notes navboard-icons"><FiEdit2/></span>
        <Form.Control name='notes' type="text" onChange={handleChange} className="text-center wrap-notes" placeholder="Add some notes"/>
      </Form.Group>
      <div className="d-md-flex justify-content-end">
        <Button className="btn auth-button w-100 my-5" type="submit">Continue</Button>
      </div>
    </Form>
  )
}

export const TransferInput = () => {
  const dataName = useSelector((state=>state.transfer.name))
  const dataPhone = useSelector((state=>state.transfer.phone))
  const dataPhoto = useSelector((state=>state.transfer.photo))
  const receiver = useSelector((state=>state.transfer.receiver))
  const dataTime = new Date().toISOString()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const transferRequest = (val) => {
    if(val.amount===''){
      window.alert('Input Amount')
    }else{
      const amount = val.amount
      const notes = val.notes
      dispatch(costumAmount(amount))
      dispatch(costumNotes(notes))
      dispatch(costumDateTransfer(dataTime))
      dispatch(getToken(receiver))
      navigate('/pinConfirm')
    }
  }
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
                    <img src={dataPhoto||defaultimg} className="img-home-prof" alt="samuel"/>
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name-transfer">{dataName}</p>
                      <p  className="wrap-type">{dataPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="wrap-text">Type the amount you want to transfer and then<br/>press continue to the next steps.</p>
              <Formik validationSchema={amountSchema} initialValues={{amount:'', notes:''}} onSubmit={transferRequest}>
                {(props)=><AuthAmoount{...props}/>}
              </Formik>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
