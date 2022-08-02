import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from '../component/Footer'
import { Row,Col } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiPlus, FiTrash } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { showProfile } from '../redux/asyncAction/profile'

export const ManagePhone = () => {
  const data = useSelector((state=>state.profile.value))
  const token = useSelector((state=>state.auth.token))
  const dispatch = useDispatch()
  const dataPhone = data?.result?.map((val)=>{
    return val.num_phone
  })
  React.useEffect(()=>{
    dispatch(showProfile(token))
  },[])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Number</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">Manage Phone Number</h1>
              <p className='wrap-text'>You can only delete the phone number and then<br/>you must add another phone number.</p>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p  className="wrap-text mb-2">Phone Number</p>
                      <p className="wrap-name-confirm">{dataPhone}</p>
                    </div>
                  </div>
                  {dataPhone?<Link className="wrap-text" to='/addNumber'>
                    <FiTrash />
                  </Link>:<Link className="wrap-text" to='/addNumber'>
                    <FiPlus />
                  </Link>}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
