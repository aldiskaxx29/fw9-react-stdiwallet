import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Form, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import michel from '../assets/images/Rectangle 25.png'
import samuel from '../assets/images/samuel.png'
import momotaro from '../assets/images/momotaro.png'
import jessica from '../assets/images/jessica.png'
import { Helmet } from 'react-helmet'

class DataProfile extends React.Component {
  render() {
    return (
      <>
        <div key={this.props.id} className="d-flex-column wrap-receiver p-3 my-3">
          <Link to='/transferInput' className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={momotaro} className="img-home-prof" alt="momotaro"/>
              <div className="d-flex-column justify-content-center ms-3">
                <p className="wrap-name-transfer">{this.props.name}</p>
                <p  className="wrap-type">{this.props.num_phone}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
  }
}


export default class Transfer extends React.Component {
  constructor(){
    super()
    this.state = {data: {
      'success': true,
      'massage': 'User show',
      'pageInfo': {
        'totalData': 5,
        'totalPage': 1,
        'curretPage': 1,
        'nextPage': null,
        'prevPage': null
      },
      'result': [
        {
          'id': 46,
          'first_name': 'zahira',
          'last_name': 'azzahra',
          'profile_photo': '1657361229660.jpeg',
          'num_phone': '088777823123',
          'balance': '54000',
          'user_id': 63
        },
        {
          'id': 47,
          'first_name': 'karina',
          'last_name': 'amalia',
          'profile_photo': '1657461860067.jpeg',
          'num_phone': '088777829921',
          'balance': '84000',
          'user_id': 64
        },
        {
          'id': 48,
          'first_name': 'sandi',
          'last_name': 'suryono',
          'profile_photo': '1657540021923.jpeg',
          'num_phone': '088777889900',
          'balance': '55000',
          'user_id': 65
        },
        {
          'id': 49,
          'first_name': 'putra',
          'last_name': 'mandiri',
          'profile_photo': '1657590849109.jpeg',
          'num_phone': '088712343211',
          'balance': '105000',
          'user_id': 66
        },
        {
          'id': 50,
          'first_name': 'admin',
          'last_name': 'tampan',
          'profile_photo': '1657633725593.jpeg',
          'num_phone': '089969699996',
          'balance': '35000',
          'user_id': 67
        }
      ]
    } }
    console.log(this.state.data);
  }
  render(){
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
                {this.state.data.result&&this.state.data.result.map((val)=>{
                  return(
                    <>
                      <React.Fragment >
                        <DataProfile id={val.id} name={val.first_name+' '+val.last_name} num_phone={val.num_phone}/>
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
}

{/* <div className="d-flex-column wrap-receiver p-3 my-3">
<Link to='/transferInput' className="d-flex justify-content-between align-items-center">
    <div className="d-flex">
        <img src={samuel} className="img-home-prof" alt="samuel"/>
        <div className="d-flex-column justify-content-center ms-3">
            <p className="wrap-name-transfer">Samuel Suhi</p>
            <p  className="wrap-type">+62 813-8492-9994</p>
        </div>
    </div>
</Link>
</div>
<div className="d-flex-column wrap-receiver p-3 my-3">
<Link to='/transferInput' className="d-flex justify-content-between align-items-center">
    <div className="d-flex">
        <img src={momotaro} className="img-home-prof" alt="momotaro"/>
        <div className="d-flex-column justify-content-center ms-3">
            <p className="wrap-name-transfer">Momo Taro</p>
            <p  className="wrap-type">+62 812-4343-6731</p>
        </div>
    </div>
</Link>
</div>
<div className="d-flex-column wrap-receiver p-3 my-3">
<Link to='/transferInput' className="d-flex justify-content-between align-items-center">
    <div className="d-flex">
        <img src={jessica} className="img-home-prof" alt="jessica"/>
        <div className="d-flex-column justify-content-center ms-3">
            <p className="wrap-name-transfer">Jessica Keen</p>
            <p  className="wrap-type">+62 811-3452-5252</p>
        </div>
    </div>
</Link>
</div>
<div className="d-flex-column wrap-receiver p-3 my-3">
<Link to='/transferInput' className="d-flex justify-content-between align-items-center">
    <div className="d-flex">
        <img src={michel} className="img-home-prof" alt="michel"/>
        <div className="d-flex-column justify-content-center ms-3">
            <p className="wrap-name-transfer">Michael Le</p>
            <p  className="wrap-type">+62 810-4224-4613</p>
        </div>
    </div>
</Link>
</div> */}