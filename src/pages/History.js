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

const Construct = ({name,transaction,amount,sender}) => {
 return(
    <>
    <div className="d-flex-column wrap-receiver p-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <img src={samuel} className="img-home-prof rounded" alt="samuel"/>
                <div className="d-flex-column justify-content-center ms-3">
                    <p className="wrap-name-transfer">{name}</p>
                    <p  className="wrap-type">{transaction}</p>
                </div>
                </div>
                    {sender?
                    <p className="history-espense">-Rp{amount}</p>:
                    <p className="history-income">+Rp{amount}</p>}
        </div>
    </div>
    </>
 )
}

export const History = () => {
    const [transaction,setTransaction] = React.useState({})
    const data = () =>{
        const dataHistory = {
            "success": true,
            "massage": "Showing History",
            "pageInfo": {
                "totalData": 7,
                "totalPage": 2,
                "curretPage": 1,
                "nextPage": 2,
                "prevPage": null
            },
            "result": [
                {
                    "id": 78,
                    "sender_id": null,
                    "receiver_id": 67,
                    "transfertype": "Top Up",
                    "amount": "50000",
                    "time_transfer": "2022-07-11T06:15:53.000Z",
                    "notes": "top up via BCA"
                },
                {
                    "id": 83,
                    "sender_id": null,
                    "receiver_id": 67,
                    "transfertype": "Top Up",
                    "amount": "51000",
                    "time_transfer": "2022-07-11T06:15:53.000Z",
                    "notes": "top up via BCA"
                },
                {
                    "id": 79,
                    "sender_id": 67,
                    "receiver_id": 63,
                    "transfertype": "Transfer",
                    "amount": "10000",
                    "time_transfer": "2022-07-12T04:10:53.000Z",
                    "notes": "bayar hutang"
                },
                {
                    "id": 82,
                    "sender_id": 67,
                    "receiver_id": 66,
                    "transfertype": "Transfer",
                    "amount": "40000",
                    "time_transfer": "2022-07-12T08:15:53.000Z",
                    "notes": "bayar hutang"
                },
                {
                    "id": 81,
                    "sender_id": 67,
                    "receiver_id": 66,
                    "transfertype": "Transfer",
                    "amount": "1000",
                    "time_transfer": "2022-07-12T08:15:53.000Z",
                    "notes": "bayar hutang"
                }
            ]
        }

        setTransaction(dataHistory)
        console.log(dataHistory);
    }
    React.useEffect(()=>{
        data()
        console.log(transaction);
    },[])

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
                            {transaction.result&&transaction.result.map((val)=>{
                                return(
                                <>
                                <Construct name={val.receiver_id!==67?val.receiver_id:val.notes} transaction={val.transfertype} amount={val.amount} sender={val.sender_id}/>
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


{/* <div className="d-flex-column wrap-receiver p-3 my-3">
<div className="d-flex justify-content-between align-items-center">
    <div className="d-flex">
        <img src={samuel} className="img-home-prof rounded" alt="samuel"/>
        <div className="d-flex-column justify-content-center ms-3">
            <p className="wrap-name-transfer">{val.sender_id?val.sender_id:val.notes}</p>
            <p  className="wrap-type">{val.transfertype}</p>
        </div>
        </div>
            {val.transfertype==='Transfer'?
            <p className="history-espense">-Rp{val.amount}</p>:
            <p className="history-income">+Rp{val.amount}</p>}
</div>
</div> */}