import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col, Modal, Form, Button } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiArrowRight, FiEdit2 } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { editprofile, showProfile } from '../redux/asyncAction/profile'
import defaultimg from '../assets/images/default.png'
import { Formik } from 'formik'

const FormUpdate=({erros,handleSubmit,handleChange,handleFileSelect})=>{
  const data = useSelector((state=>state.profile.value))
  return(
    <>
      <Form onSubmit={handleSubmit}>
        {data?.result?.map((val)=>{
          return(
            <>
              <Modal.Body>
                <p className='wrap-text'>Input Your Name and Upload Your Profile</p>
                <div className="d-flex flex-column justify-content-around wrapper-pin mw-100 gap-2 mt-5">
                  <div className="d-flex auth-border-pin">
                    <Form.Control name='first_name' onChange={handleChange} placeholder={val.first_name}/>
                  </div>
                  <div className="d-flex auth-border-pin">
                    <Form.Control name='last_name' onChange={handleChange} placeholder={val.last_name}/>
                  </div>
                  <div className="d-flex auth-border-pin">
                    <Form.Control type='file' name='profile_photo' onChange={handleFileSelect}/>
                  </div>
                </div>
                <br/>
              </Modal.Body>
            </>
          )
        })}
        <Modal.Footer>
          <Button name='button-confirm' className='auth-button' type='submit'>Confirm</Button>
        </Modal.Footer>
      </Form>
    </>
  )
}

const MyModal = (props) => {
  const data = useSelector((state=>state.profile.value))
  const token = useSelector((state=>state.auth.token))
  const dispatch = useDispatch()
  const setProfile = (val) =>{
    const first_name = val.first_name
    const last_name = val.last_name
    const photo = val.profile_photo
    console.log(photo);
    dispatch(editprofile({token,first_name,last_name,photo}))
  }
  return(
    <>
      <Modal {...props} aria-labelledby="modal-pin" centered className='mx-auto'>
        <Modal.Header closeButton>
          <Modal.Title id="modal-pin" className='wrap-title'>
                Enter Your Data
          </Modal.Title>
        </Modal.Header>
        {data?.result?.map((val)=>{
          const firstname = val.first_name
          const lastname = val.last_name
          return(
            <>
              <Formik onSubmit={setProfile} initialValues={{first_name:{firstname},last_name:{lastname},profile_photo:''}}>
                {(props)=><FormUpdate{...props}/>}
              </Formik>
            </>
          )
        })}
      </Modal>    
    </>
  )
}

export const Profile = () => {
  const data = useSelector((state=>state.profile.value))
  const token = useSelector((state=>state.auth.token))
  const successmsg = useSelector((state=>state.profile.successmsg))
  const dispatch = useDispatch()
  const [show, setShow] =React.useState(false);
  React.useEffect(()=>{
    dispatch(showProfile(token))
  },[successmsg])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <div className="w-100 text-center my-3 my-md-5">
                <img src={data?.profile_photo?data.profile_photo:defaultimg} className='img-home-prof img-fluid' alt="profile"/>
                <div onClick={()=>setShow(true)}>
                  <p className="wrap-text my-2"><FiEdit2 className='me-2 wrap-text'/>Edit</p>    
                  <p className="wrap-name-profile mt-4">{`${data?.first_name||'Your'} ${data?.last_name||'Name'}`}</p>
                  <p className="mx-5 wrap-text">{data?.num_phone || 'Your Number'}</p>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3 mx-auto wrap-profile-list">
                <Link to='/personalInfo' className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between ms-3">
                    <p  className="history-name mb-1">Personal Information</p>
                  </div>
                  <FiArrowRight className='navboard-icons'/>
                </Link>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3 mx-auto wrap-profile-list ">
                <Link to='/changePassword' className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between ms-3">
                    <p  className="history-name mb-1">Change Password</p>
                  </div>
                  <FiArrowRight className='navboard-icons'/>
                </Link>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3 mx-auto wrap-profile-list">
                <Link to='/changePin' className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between ms-3">
                    <p  className="history-name mb-1">Change PIN</p>
                  </div>
                  <FiArrowRight className='navboard-icons'/>
                </Link>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3 mb-5 mx-auto wrap-profile-list">
                <Link to='/' className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between ms-3">
                    <p  className="history-name mb-1">Log Out</p>
                  </div>
                </Link>
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
