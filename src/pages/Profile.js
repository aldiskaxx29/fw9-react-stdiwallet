import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import profile from '../assets/images/Rectangle 25.png'
import { FiArrowRight, FiEdit2 } from 'react-icons/fi'

export const Profile = () => {
  return (
    <>
    <Header/>
    <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
            <NavBoard/>
            <Col md={9} className='d-flex flex-column mt-3'>
                <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                    <div className="w-100 text-center my-3 my-md-5">
                        <img src={profile} alt="profile"/>
                        <p className="wrap-text my-2"><FiEdit2 className='me-2 wrap-text'/>Edit</p>    
                        <p className="wrap-name-profile mt-4">Robert Chandler</p>
                        <p className="mx-5 wrap-text">+62 813-9387-7946</p>
                    </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3 mx-auto wrap-profile-list">
                            <Link to='personalInfo' className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between ms-3">
                                      <a href="/personalInfo.html">
                                        <p  className="history-name mb-1">Personal Information</p>
                                      </a>
                                    </div>
                                        <FiArrowRight className='navboard-icons'/>
                            </Link>
                        </div>
                        <div className="d-flex-column wrap-receiver p-3 my-3 mx-auto wrap-profile-list ">
                            <className to='/changePassword' className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between ms-3">
                                      <a href="/changePassword.html">
                                        <p  className="history-name mb-1">Change Password</p>
                                      </a>
                                    </div>
                                        <FiArrowRight className='navboard-icons'/>
                            </className>
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
