import logo from './logo.png';
import transfer from './transfer.png';
import pic1 from './assets/images/pic1.jpg';
import './App.css';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,ButtonGroup,Button,CardTitle, CardText, Row, Col,Card } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


function AppContactUs() {

    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

  
  return (
    <div className="App">
    <header className="header1">
     <div className="logo1">
     <Link to="/travanya"> <img src={logo}/></Link>
     </div>
     <div className="right-section d-flex">
        <a>
        <span>
           <img src="https://www.travanya.com/wp-content/themes/trv/images/phn.png"/>
         </span>
         <div className="pull-right">
           <small>Call Us to Get 24x7 Support</small>
           <h3>+91-172-5204000</h3>
         </div>
        </a>
     </div>
    </header>
    
    <div className="navbar">
          <ul>
           <li>
           <Link to="/flight"><i className="fa fa-plane"></i>Flights</Link>
           </li>
           <li>
           <Link to="/deals"><i className="fa fa-gift"></i>Deals</Link>
           </li>
           <li>
           <Link to="/tracker"><i className="fa fa-search"></i>Flight Tracker</Link>
           </li>
           <li>
           <Link to="/contact-us"><i className="fa fa-phone"></i>Contact Us</Link>
           </li>
         </ul>
    </div>
    <div className="banner home">
    <div className="container">
    <h2>The World is Waiting for You to Explore It!</h2>
    <div className="main-form">
      <ul>
        <li><a className="active"><i className="fa fa-plane mar_r5"></i>Flights</a></li>
        <li><a><i className="fa fa-umbrella mar_r5"></i>Package</a></li>
      </ul>
      <div className="switch-field">
      <ButtonGroup> 
        <Button className="active">Round Trip</Button>
        <Button>One Way</Button>
      </ButtonGroup>
      </div>
      <div className="main_form">
        <div className="row ">
          
          <div className="col-lg-6 col-md-12">
              <div className="row">
              <div className="col-sm-6 ex-3">
                  <div className="form-group ff_input">
                  <label> <i className="fa fa-map-marker"/> Going From?</label>
                  <input className="form-control" type="text" placeholder="Delhi"/><p><span>DEL, Delhi Airport India</span></p>
                  </div>	
              </div> 
                  
              <div className="col-sm-6 ex-3">
                  <a href=""><img className="transfer hidden-xs" src={transfer} alt="img"/></a>
                  <div className="form-group gap_extra border-gap">
                  <label><i className="fa fa-map-marker"/>To Where?</label>
                  <input className="form-control" type="text" placeholder="Banglore"/><p><span>BLR, Kempegowda International Air..</span></p>
                  </div>	  
              </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-12">
        <div className="row">
        <div id="add_class" className="col-sm-3 col-xs-6 ex-3">
          <div className="form-group calender border-left1">
          <label><i className="fa fa-calendar"></i> Departure </label>
          <input className="form-control" type="text" placeholder="21 May"/>
    
          <p><span>Friday</span></p>
          </div>
          </div>
        <div className="col-sm-3 col-xs-6 ex-3">
          <div id="return_optn" className="myText">		
          <div className="form-group calender">
          <label><i className="fa fa-retweet"></i>Return </label>
          <input className="form-control" type="text" placeholder="05 June"/><p><span>Saturday</span></p>
          </div>
          </div>
         </div> 
    
          <div className="col-sm-6 col-xs-12 ex-3 traveller_input">
          <div className="form-group">
          <label><i className="fa fa-users"></i>Traveller &amp; Class</label>
          <input className="form-control" placeholder="1 Traveller"/>
              <p><span>Economy/Premium Economy</span></p>
          </div>
          </div>
        </div>
      </div>
    
        </div>
    
      </div>
      <div className="btn_search text-center"><button className="btn btn-orange" type="submit"> <i className="fa fa-search"></i> Submit</button></div>
    
    </div>
    </div>
    </div>
    
    <div className="sign_up">
     <div className="container">
         <div className="main_div">
           <div className="row">
               <div className="col-lg-6 col-md-12">
                 <div className="inner_shadow">
                     <div className="col-sm-12">
                         <div className="star">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                         </div>
                     </div>
                     <div className="row col-12">
                         <div className="col-lg-8 col-md-12">
                         <p>Our holiday was <b>well-planned!</b> We had a <b>great experience</b> and enjoyed to the fullest.</p>
                       </div>
                       <div className="col-lg-4 col-md-12">
                         <span className="name_client">Mrs. Chitra Mehta</span>
                       </div>
                     </div>
                 </div>
               </div>
               <div className="col-lg-6 col-md-12">
               <div className="inner_shadow parent">
                   <div className="col-12">
                       <h5>Subscribe To Get Weekly Travel Inspiration In Your Inbox</h5>
                   </div>
                   <div className="row col-12">
                   <div className="col-lg-8 col-md-12">
                       <div className="form-group">        
                         <div className="input-group">
                           <div className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                           <input className="form-control txt-subs req" placeholder="Enter your e-mail here"/>
                         </div>
                       </div>
                     </div>
                   <div className="col-lg-4 col-md-12">
                          <button className="read_more btn-subs">Subscribe</button>
                   </div>
               </div>
               </div>
               </div>
           </div>
         </div>
     </div>
    </div>
    
  
    <div className="newsletter">
     <div className="container">
         <div className="main_div parent">
             <div className="row">
               <div className="col-sm-6">
                   <img src="https://www.travanya.com/wp-content/themes/trv/images/subscribe.svg"/>
                   <h2>Get Updates & More</h2>
                   <h5>Thoughtful thoughts to your inbox</h5>
               </div>
               <div className="col-sm-6 d-flex align-items-center">
                   <div className="input-group">
                       <input className="form-control txt-subs" placeholder="Your Email"/>
                       <div className="input-group-btn">
                           <button className="btn btn-subs">Subscribe</button>
                       </div>
                   </div>
               </div>
               </div>
         </div>
     </div>
    </div>
    <footer>
    <div className="container">
     <div className="row">
         <div className="col-sm-3 col-xs-6">
             <h3>Company</h3>
             <div className="menu-company-container">
                 <ul className="menu">
                     <li><a>Contact Us</a></li>
                     <li><a>About Us</a></li>
                 </ul>
             </div>
         </div>
         <div className="col-sm-3 col-xs-6">
             <h3>Information</h3>
             <div className="menu-company-container">
                 <ul className="menu">
                     <li><a>Privacy Policy</a></li>
                     <li><a>Terms & Conditions</a></li>
                     <li><a>Cookies Policy</a></li>
                     <li><a>Disclaimer</a></li>
                 </ul>
             </div>
         </div>
         <div className="col-sm-3 col-xs-6">
             <h3>Resources</h3>
             <div className="menu-company-container">
                 <ul className="menu">
                     <li><a>Blog</a></li>
                     <li><a>FAQ</a></li>
                 </ul>
             </div>
         </div>
         <div className="col-sm-3 col-xs-6">
             <h3>We are Social</h3>
             <div className="menu-company-container">
                 <ul className="social_icn">
                   <li><a><i className="fa fa-facebook fa-2x"></i></a></li>
                   <li><a><i className="fa fa-instagram fa-2x"></i></a></li>
                   <li><a><i className="fa fa-twitter fa-2x"></i></a></li>
                 </ul>
                 <ul className="info_f">
                   <li>
                     <a><i className="fa fa-phone"></i> +91-172-5204000</a>
                   </li>
                   <li>
                     <a><i className="fa fa-envelope-o"></i> info@travanya.com</a>
                   </li>
                 </ul>
             </div>
         </div>
     </div>
     <p className="lst_txt">Copyright © 2021 Shipra Travel. All Rights Reserved.</p>
    </div>
    </footer>
    </div>
  
  );
}

export default AppContactUs;
