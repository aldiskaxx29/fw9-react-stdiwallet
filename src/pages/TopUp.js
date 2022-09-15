import React from 'react'
import {Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'
import { FiPlus } from 'react-icons/fi'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { useDispatch, useSelector } from 'react-redux';
import { topUp } from '../redux/asyncAction/transfer';
import { resetMsgTF } from '../redux/reducer/transfer';

const amountSchema = Yup.object().shape({
  topup: Yup.number().min(20000).required('Required'),
})

const FormTopUp = ({errors, handleSubmit, handleChange}) =>{
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p className='wrap-text'>Input Your Amount Minimal is Rp.20.000</p>
          <div className="d-flex flex-column justify-content-around wrapper-pin mw-100 gap-2 mt-5">
            <div className="d-flex auth-border-pin">
              <Form.Control name='topup' onChange={handleChange} placeholder='Input Amount' isInvalid={!!errors.topup}/>
              <Form.Control.Feedback>{errors.topup}</Form.Control.Feedback>
            </div>
          </div>
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button name='button-confirm' className='auth-button' type='submit'>Confirm</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

const MyModal = (props) => {
  const dispatch = useDispatch()
  const token = useSelector((state=>state.auth.token))
  const setTopUp = (val) =>{
    const request = {amount: val.topup};
    dispatch(topUp({token,  request}))
  }
  return(
    <>
      <Modal {...props} aria-labelledby="modal-pin" centered className='mx-auto'>
        <Modal.Header closeButton>
          <Modal.Title id="modal-pin" className='wrap-title'>
                Enter Your Saldo
          </Modal.Title>
        </Modal.Header>
        <Formik onSubmit={setTopUp} initialValues={{topup:''}} validationSchema={amountSchema}>
          {(props)=><FormTopUp{...props}/>}
        </Formik>
      </Modal>    
    </>
  )
}

export const TopUp = () => {
  const dispatch = useDispatch()
  const successmsg = useSelector((state=>state.transfer.successmsg))
  const [show,setShow] = React.useState(false)
  React.useEffect(()=>{
    if (successmsg) {
      dispatch(resetMsgTF())
      setShow(false)
    }
  },[successmsg])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Up</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            {successmsg?(
              <Alert className="sticky-top text-center" variant="success">{successmsg}</Alert>
            ): null}
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">How To Top Up</h1>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3" onClick={()=>setShow(true)}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex ms-2 gap-3">
                      <FiPlus className="d-none d-md-flex navboard-icons"/>
                      <p className="mt-3">Your VA 33239342141324</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">1</span>Go to the nearest ATM or you can use E-Banking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">2</span>Type your security number on the ATM or E-Banking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">3</span >Select “Transfer” in the menu </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">4</span>Type the virtual account number that we provide you at the top.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">5</span>Type the amount of the money you want to top up.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">6</span>Read the summary details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">7</span>Press transfer / top up</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-1 p-md-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name mt-3"><span className="wrap-num me-3">8</span>You can see your money in STD iWallet within 3 hours.</p>
                    </div>
                  </div>
                </div>
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
