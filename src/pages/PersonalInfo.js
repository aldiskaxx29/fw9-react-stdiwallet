import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { showProfile } from '../redux/asyncAction/profile'

export const PersonalInfo = () => {
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
        <title>Personal Info</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            {data.result&&data.result.map((val)=>{
              const firstname = val.first_name.split(' ').map(str =>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
              const lastname = val.last_name.split(' ').map(str =>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ')
              const phone = val.num_phone.split('')
              return(
                <>
                  <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                    <h1 className="wrap-title mb-3">Personal Info</h1>
                    <p className='wrap-text'>We got your personal information from the sign<br/>up proccess. If you want to make changes<br/>on your information, contact our support.</p>
                    <div className="d-flex-column wrap-receiver p-3 my-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <div className="d-flex-column justify-content-center ms-1">
                            <p  className="wrap-text mb-2">First Name</p>
                            <p className="wrap-name-confirm">{firstname}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex-column wrap-receiver p-3 my-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <div className="d-flex-column justify-content-center ms-1">
                            <p  className="wrap-text mb-2">Last Name</p>
                            <p className="wrap-name-confirm">{lastname}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex-column wrap-receiver p-3 my-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <div className="d-flex-column justify-content-center ms-1">
                            <p  className="wrap-text mb-2">Verified E-mail</p>
                            <p className="wrap-name-confirm">pewdiepie1@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex-column wrap-receiver p-3 my-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <div className="d-flex-column justify-content-center ms-1">
                            <p  className="wrap-text mb-2">Phone Number</p>
                            <p className="wrap-name-confirm">{phone}</p>
                          </div>
                        </div>
                        <Link className="wrap-text" to="/manageNumber">
                          <p className="p-3">Manage</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
