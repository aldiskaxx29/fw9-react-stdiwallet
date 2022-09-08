import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiArrowUp, FiPlus } from 'react-icons/fi'
import graph from '../assets/images/graphic.png'
import defaultimg from '../assets/images/default.png'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Footer } from '../component/Footer'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { showProfile } from '../redux/asyncAction/profile'
import { showHistory } from '../redux/asyncAction/history'
import { showAllProfile } from '../redux/asyncAction/getAllProfile'
import { balance } from '../redux/reducer/profile'

const DataDynamic = ({name,transaction,amount,receiver,sender,photo,userid}) => {
  const data = useSelector((state=>state.getAllProfile.value))
  const dispatch = useDispatch()
  const urlImage=`http://localhost:3333/public/uploadProfile/${photo}`
  console.log(transaction);
  React.useEffect(()=>{
    dispatch(showAllProfile())
  },[])
  console.log(data);
  return(
    <>
      <div className="d-flex justify-content-between align-items-center mt-2 mt-md-5">
        <div className="d-flex justify-content-center">
          <img src={photo?urlImage:defaultimg} className="img-home-prof img-fluid" alt="samuel"/>
          <div className="d-flex-column justify-content-center mx-3">
            <p className="wrap-name-transfer">{name}</p>
            <p  className="wrap-type">{transaction}</p>
          </div>
        </div>
        {receiver===userid?
          <p className="history-income">+Rp{amount}</p>:
          <p className="history-espense">-Rp{amount}</p>}
      </div>
    </>
  )
}

export const Home = () => {
  const data = useSelector((state=>state.profile.value))
  const dataHistory = useSelector((state=>state.history.value))
  const token = useSelector((state=>state.auth.token))
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(showProfile(token))
    dispatch(showHistory({token}))
  },[])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col className='col-12 col-md-9'>
            <Row>
              <Col className='col-12'>
                <div className='wrap-balance mt-3'>
                  <div className='wrap-details d-flex justify-content-between'>
                    <div className="wrap-info">
                      <p>Balance</p>
                      {data?.result?.map((val)=>{
                        dispatch(balance(val.balance))
                        return(
                          <>
                            <h1>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(parseInt(val.balance))}</h1>
                            <p>{val.num_phone}</p>
                          </>
                        )
                      })}
                    </div>
                    <div>
                      <Link to='/transfer' className="d-flex justify-content-around align-items-center wrap-transfer mt-4 mx-3 mx-md-4">
                        <FiArrowUp className="wrap-i d-none d-md-flex navboard-icons"/>
                        <p className="link-balance text-center my-0">Transfer</p>
                      </Link>
                      <Link to='/topUp' className="d-flex justify-content-around align-items-center wrap-topup mt-4 mx-3 mx-md-4">
                        <FiPlus className="wrap-i d-none d-md-flex navboard-icons"/>
                        <p className="link-balance text-center my-0">TopUp</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={7} className="mt-3">
                <div className="wrap-grap">
                  <div className="d-flex justify-content-between">
                    <div className="wrap-income mt-3 mt-md-4 mx-3 mx-md-4">
                      <i className="wrap-income-i" data-feather="arrow-down"></i>
                      <p className="wrap-grap-p">Income</p>
                      <p className="wrap-grap-balance">Rp2.120.000</p>
                    </div>
                    <div className="wrap-expense mt-3 mt-md-4 mx-3 mx-md-4">
                      <i className="wrap-expense-i" data-feather="arrow-up"></i>
                      <p className="wrap-grap-p">Expense</p>
                      <p className="wrap-grap-balance">Rp1.560.000</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid mw-100" src={graph} alt="graph"/>
                  </div>
                </div>
              </Col>
              <Col md={5} className="mt-3">
                <div className='d-flex-column wrap-history'>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="history-list">Transaction History</p>
                    </div>
                    <div>
                      <Link to="/history" className="see-all">See all</Link>
                    </div>
                  </div>
                  {dataHistory?.result?.map((val,index)=>{
                    return(
                      <>
                        <DataDynamic key={index} receiver={val.receiver_id} name={val.sender_id?val.first_name+' '+val.last_name:val.notes} transaction={val.transfertype} amount={val.amount} sender={val.sender_id} photo={val.profile_photo} userid={val.user_id}/>
                      </>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}

