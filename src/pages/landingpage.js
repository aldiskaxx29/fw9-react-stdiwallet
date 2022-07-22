import React from 'react'
import background from '../assets/images/Group 48.png'
import phone2 from '../assets/images/png-phone2.png'
import download from '../assets/images/Group 50.png'
import corp from '../assets/images/Group 51.png'
import icon1 from "../assets/images/Group 10.png"
import icon2 from "../assets/images/Group 11.png"
import icon3 from "../assets/images/Group 12.png"
import {Link} from "react-router-dom"
import{FiArrowLeft,FiArrowRight} from "react-icons/fi";
import '../assets/css/lpV2.css';

const Landingpage = () => {
  return (
    <>
    <div>
      <div className="header">
          <p className="title">STD iWallet</p>
          <div className="togle">
              <Link to="/login" className="login">Login</Link>
              <Link to="/signUp" className="signUp">Sign Up</Link>
          </div>
      </div>
    </div>
    <div>
      <div className='awesome'>
        <div className='pict'>
          <img src={background} className='awesome-background' alt='background'/>
          <img src={phone2} className='awesome-phone' alt='imagesphone'/>
        </div>
        <div className='awesome-text'>
          <p className="awesome-title" >Awesome App For Saving <span className="awesome-title-span">Time.</span></p>
          <p className="awesome-desc"> We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
          <Link to="/signUp" className="tryIt">Try It Free</Link><br/><br/>
          <img className='img-download' src={download}alt="download"/>
        </div>
      </div>
    </div>
    <div>
        <div className="img-corp">
            <img src={corp} className="img-display" alt="corp"/>
        </div>
    </div>
    <div>
        <div className="about">
            <p className="about-title"><span className='awesome-title-span'>About</span> the Application.</p>
            <p className="about-desc">We have some great features from the application and it's totally free to use by all users around the world.</p>
            <div className="card-wrap">
                <div>
                    <img className='img-card' src={icon1} alt=""/>
                    <p className="card-title">24/7 Support</p>
                    <p className="textCard">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                </div>
                <div className="cardItems">
                    <img className='img-card' src={icon2} alt=""/>
                    <p className="card-title" >Data Privacy</p>
                    <p className="textCard">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                </div>
                <div>
                    <img className='img-card' src={icon3} alt=""/>
                    <p className="card-title" >Easy Download</p>
                    <p className="textCard">STD iWallet is 100% totally free to use it's now available on Google Play Store and App Store. </p>
                </div>
            </div>
        </div>
    </div>
    <div>
      <div className="awesome">
          <div className="pict">
            <img src={background} className='awesome-background' alt='background'/>
            <img src={phone2} className='awesome-phone' alt='imagesphone'/>
          </div>
          <div className='awesome-list'>
            <p className="awesome-title">All The <span className='awesome-title-span'>Great</span> <br/> STD iWallet Features.</p>
            <p className="color-point">1. <span className="point">Small Fee</span></p>
            <p className="desc-list" >We only charge 5% of every success transaction done in Zwallet app</p>
            <p className="color-point">2. <span className="point">Data Secured</span></p>
            <p className="desc-list" >All your data is secured properly in our system and it’s encrypted.</p>    
            <p className="color-point">3. <span className="point">User Friendly</span></p>
            <p className="desc-list" >STD iWallet come up with modern and sleek design and not complicate.</p>
          </div>
        </div>
    </div>
    <div>
      <div className='saying'>
      <p className="awesome-title" >What Users are <span className='awesome-title-span'>Saying.</span></p>
            <p className="saying-desc">We have some great features from the application and it’s totally free to use by all users around the world.</p>
            <div className="saying-nav">
                <h1><FiArrowLeft/></h1>
                <div className="saying-card">
                    <img src="/assets/image/kribo.png" alt=""/>
                    <p className="saying-title">Alex Hansinburg</p>
                    <p className="saying-work">Designer</p>
                    <p className="saying-desc">“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                </div>
                <h1><FiArrowRight/></h1>
            </div>
      </div>
    </div>
    <div>
    <div className="footer">
            <p className="footer-title">STD iWallet</p>
            <p className="footer-desc">Simplify financial needs and saving <br/>much time in banking needs with <br/>one single app.</p>
            <hr className="footer-hr" />
            <div className="footer-end">
                <p className='footer-text-end'>2022 Stdiwallet. All right reserved.</p>
                <div className="footer-contact footer-text-end">
                    <p className="footer-num">+62 5637 8882 9901</p>
                    <p>contact@stdiwallet.com</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landingpage