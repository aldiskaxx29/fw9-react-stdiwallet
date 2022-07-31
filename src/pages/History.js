import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Form, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { showHistory } from '../redux/asyncAction/history'

class DataDynamic extends React.Component {
  render() {
    const urlImage=`http://localhost:3333/public/uploadProfile/${this.props.photo}`
    return (
      <>
        <div className="d-flex-column wrap-receiver p-3 my-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={urlImage} className="img-home-prof rounded" alt="samuel"/>
              <div className="d-flex-column justify-content-center ms-3">
                <p className="wrap-name-transfer">{this.props.name}</p>
                <p  className="wrap-type">{this.props.transaction}</p>
              </div>
            </div>
            {this.props.sender?
              <p className="history-espense">-Rp{this.props.amount}</p>:
              <p className="history-income">+Rp{this.props.amount}</p>}
          </div>
        </div>
      </>
    )
  }
}


class Transfer extends React.Component {
  render(){
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>History</title>
        </Helmet>
        <Header/>
        <section className='wrap-section'>
          <Row className='px-2 px-md-5 mx-md-5'>
            <NavBoard/>
            <Col md={9} className='d-flex flex-column mt-3'>
              <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
                <h1 className="wrap-title">Transaction History</h1>
                <p className="wrap-text mt-2 mt-md-3 mb-3 mb-md-5">This Week</p>
                {this.props.value.result&&this.props.value.result.map((val,index)=>{
                  return(
                    <DataDynamic key={index} name={val.sender_id?val.receiver_id:val.notes} transaction={val.transfertype} amount={val.amount} sender={val.sender_id}/>
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

const mapStateToProps = (state) =>({
  value: state.history.value
});

const mapDispatchToProps = (dispatch)=>({
  data: dispatch(showHistory())
});

export default connect (mapStateToProps,mapDispatchToProps)(Transfer)


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