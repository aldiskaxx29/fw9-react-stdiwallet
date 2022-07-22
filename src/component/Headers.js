import {Col,Row,Dropdown,Button} from "react-bootstrap";
import React from 'react'
import profile from "../assets/images/Rectangle 25.png"
import {FiBell} from "react-icons/fi"

const Header = () => {
  return (
    <>
    <Row className="d-flex justify-content-between mw-100 wrap-header">
        <Col md={7}>
            <div className="px-3 px-md-5 mx-0 mx-md-5">
              <span className="title-wallet">STD iWallet</span>
          </div>
        </Col>
        <Col md={5}>
            <div className="d-flex justify-content-between justify-content-md-end align-items-center wrap-profile px-2 px-md-3 mx-2 mx-md-3">
                <img src={profile} className="img-home-prof img-fluid" alt="profile"/>
                <div className="d-flex-column justify-content-center mx-3">
                    <p className="name-profile">Robert Chandler</p>
                    <p className="num-profile">+62 8139 3877 7946</p>
                </div>
                <Dropdown>
                    <Button className="w-100 wrap-bg-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FiBell className="wrap-nav-dashboard wrap-header-button"/>
                    </Button>
                    
                </Dropdown>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Header
