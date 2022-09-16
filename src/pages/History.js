import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import defaultimg from '../assets/images/default.png'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { showHistory } from '../redux/asyncAction/history'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { decrement, increment } from '../redux/reducer/counter'

class DataDynamic extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex-column wrap-receiver p-3 my-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              {this.props.loginUser===this.props.receiver?
                <>
                  <img src={this.props.photo?this.props.photo:defaultimg} className="img-home-prof" alt="samuel"/>
                  <div className="d-flex-column justify-content-center mx-3">
                    <p className="wrap-name-transfer">{this.props.name.includes('null') ? this.props.namerec : this.props.name}</p>
                    <p  className="wrap-type">{this.props.transaction}</p>
                  </div>
                </>:<>
                  <img src={this.props.photorec?this.props.photorec:defaultimg} className="img-home-prof" alt="samuel"/>
                  <div className="d-flex-column justify-content-center mx-3">
                    <p className="wrap-name-transfer">{this.props.namerec}</p>
                    <p  className="wrap-type">{this.props.transaction}</p>
                  </div>
                </>
              }
            </div>
            {this.props.receiver===this.props.loginUser?
              <p className="history-income">+Rp{this.props.amount}</p>:
              <p className="history-espense">-Rp{this.props.amount}</p>}
          </div>
        </div>
      </>
    )
  }
}


class Transfer extends React.Component {
  componentDidUpdate(prevProps){
    if(prevProps.pages!==this.props.pages){
      this.props.data({token:this.props.token,pages:this.props.pages})
    }
  }
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
                <p className="wrap-text mt-2 mt-md-3 mb-3 mb-md-5"></p>
                {this.props.history?.result?.map((val,index)=>{
                  return(
                    <DataDynamic data={this.props.profile} loginUser={this.props.id} key={index} receiver={val.receiver_id} name={val.first_name+' '+val.last_name} namerec={val.firstnamerec+' '+val.lastnamerec} transaction={val.transfertype} amount={val.amount} sender={val.sender_id} photo={val.profile_photo} photorec={val.photorec} userid={val.user_id}/>
                  )
                })}
                <div className='d-flex justify-content-around m-3'>
                  <Button className='auth-button m-0' onClick={()=>this.props.decrement()}><FiArrowLeft/></Button>
                  <Button className='auth-button m-0' onClick={()=>this.props.increment()}><FiArrowRight/></Button>
                </div>
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
  history: state.history.value,
  profile: state.profile.value,
  pages: state.counter.num,
  token: state.auth.token,
  id: state.auth.id
});

const mapDispatchToProps = (dispatch)=>({
  data:({token,pages})=> dispatch(showHistory({token,pages})),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
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