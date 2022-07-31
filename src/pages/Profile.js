import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import profile from '../assets/images/Rectangle 25.png'
import { FiArrowRight, FiEdit2 } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { showProfile } from '../redux/asyncAction/profile'

export const Profile = () => {
  const data = useSelector((state=>state.profile.value))
  const token = useSelector((state=>state.auth.token))
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(showProfile(token))
  },[])
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
                {data.result&&data.result.map((val)=>{
                  const urlImage=`http://localhost:3333/public/uploadProfile/${val.profile_photo}`
                  return(
                    <>
                      <img src={urlImage} className='img-home-prof img-fluid' alt="profile"/>
                      <p className="wrap-text my-2"><FiEdit2 className='me-2 wrap-text'/>Edit</p>    
                      <p className="wrap-name-profile mt-4">{val.first_name+' '+val.last_name}</p>
                      <p className="mx-5 wrap-text">{val.num_phone}</p>
                    </>
                  )
                })}
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
    </>
  )
}
