import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiArrowUp, FiPlus } from 'react-icons/fi'
import graph from '../assets/images/graphic.png'
import samuel from '../assets/images/samuel.png'
import netflix from '../assets/images/netflix.png'
import christine from '../assets/images/cristine.png'
import adobe from '../assets/images/adobe.png'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { Footer } from '../component/Footer'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import {useDispatch, useSelector } from 'react-redux/es/exports'
import { showProfile } from '../redux/asyncAction/profile'

export const Home = () => {
  const data = useSelector((state=>state.profile.value))
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(showProfile())
    console.log(data);
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
                      <h1>{data?.result?.balance}</h1>
                      <p>+62 813-9387-7946</p>
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
                  <div className="d-flex justify-content-between align-items-center mt-2 mt-md-5">
                    <div className="d-flex justify-content-center">
                      <img src={samuel} className="img-home-prof img-fluid" alt="profile"/>
                      <div className="d-flex-column justify-content-center mx-3">
                        <p className="history-name">Samuel Suhir</p>
                        <p className="history-num">Transfer</p>
                      </div>
                    </div>
                    <p className="history-income">+Rp50.000</p>
                  </div> 
                  <div className="d-flex justify-content-between align-items-center mt-1 mt-md-3">
                    <div className="d-flex justify-content-center">
                      <img src={netflix} className="img-home-prof img-fluid" alt="profile"/>
                      <div className="d-flex-column justify-content-center mx-3">
                        <p className="history-name">Netflix</p>
                        <p className="history-num">Subscription</p>
                      </div>
                    </div>
                    <p className="history-espense">-Rp149.000</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-1 mt-md-3">
                    <div className="d-flex justify-content-center">
                      <img src={christine} className="img-home-prof img-fluid" alt="profile"/>
                      <div className="d-flex-column justify-content-center mx-3">
                        <p className="history-name">Christine Mar...</p>
                        <p className="history-num">Transfer</p>
                      </div>
                    </div>
                    <p className="history-income">+Rp150.000</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-1 mt-md-3">
                    <div className="d-flex justify-content-center">
                      <img src={adobe} className="img-home-prof img-fluid" alt="profile"/>
                      <div className="d-flex-column justify-content-center mx-3">
                        <p className="history-name">Adobe Inc.</p>
                        <p className="history-num">Subscription</p>
                      </div>
                    </div>
                    <p className="history-espense">-Rp249.000</p>
                  </div>
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

