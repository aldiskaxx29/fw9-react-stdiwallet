import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { showAllProfile } from '../redux/asyncAction/getAllProfile'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { costumNameTransfer, costumPhoneTransfer, costumPhotoTransfer } from '../redux/reducer/transfer'

const DataDynamic = ({id,name,num_phone,photo}) => {
  const urlImage=`http://localhost:3333/public/uploadProfile/${photo}`
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const passingData = () => {
    dispatch(costumNameTransfer(name))
    dispatch(costumPhoneTransfer(num_phone))
    dispatch(costumPhotoTransfer(urlImage))
    navigate('/transferInput')
  }
  return(
    <>
      <div key={id} className="d-flex-column wrap-receiver p-3 my-3">
        <div onClick={passingData} className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={urlImage} className="img-home-prof" alt="momotaro"/>
            <div className="d-flex-column justify-content-center ms-3">
              <p className="wrap-name-transfer">{name}</p>
              <p  className="wrap-type">{num_phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Transfer = () => {
  const dataProfile = useSelector((state=>state.getAllProfile.value))
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(showAllProfile())
  },[])
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
              <h1 className="wrap-title">Search Receiver</h1>
              <Form>
                <Form.Group className="d-flex mt-4">
                  <span className="wrap-search rounded-start"> <FiSearch className='ms-2'/> </span>
                  <Form.Control className="wrap-search rounded-end" type="email" placeholder="Search Receiver"/>
                </Form.Group>
              </Form>
              {dataProfile.result&&dataProfile.result.map((val)=>{
                return(
                  <>
                    <React.Fragment >
                      <DataDynamic id={val.id} photo={val.profile_photo} name={val.first_name+' '+val.last_name} num_phone={val.num_phone}/>
                    </React.Fragment>
                  </>
                )
              })}
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}