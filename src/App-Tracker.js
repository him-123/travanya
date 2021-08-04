import logo from './logo.png';
import transfer from './transfer.png';
import pic1 from './assets/images/pic1.jpg';
import './App.css';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


function App() {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


  
  return (
    <div className="App">
    <header className="header1">
     <div className="logo1">
       <img src={logo}/>
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
           <a><i className="fa fa-plane"></i>Flights</a>
           </li>
           <li>
           <a><i className="fa fa-gift"></i>Deals</a>
           </li>
           <li>
           <a><i className="fa fa-search"></i>Flight Tracker</a>
           </li>
           <li>
           <a><i className="fa fa-phone"></i>Contact Us</a>
           </li>
         </ul>
    </div>
    <div className="banner home tracker-home">
      <div className="container">
          <div className="row">
              <div className="col-sm-6">
                <div className="tracker-left">
                <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab=== '11' })}
                        onClick={() => { toggle('11'); }}
                      >
                        By Flight
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '12' })}
                        onClick={() => { toggle('12'); }}
                      >
                        By Route
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '13' })}
                        onClick={() => { toggle('13'); }}
                      >
                        By Airport
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="11">
                      <Row>
                        <Col sm="12">
                          <div className="panel-body">
                              <div className="form-group">
                                  <label>Airline Name Or Code</label>
                                  <input className="form-control" type="text"/>
                              </div>
                              <div className="form-group">
                                  <label>Arrival Airport Name or Co</label>
                                  <input className="form-control" type="text"/>
                              </div>
                              <div className="form-group">
                                  <label>Select Date</label>
                                  <select className="form-control">
                                    <option>2021/07/30</option>
                                    <option>2021/07/31</option>
                                    <option>2021/08/01</option>
                                  </select>
                              </div>
                              <div className="form-group">
                                <Button color="primary" className="normal-button">Search</Button>
                              </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="12">
                      <Row>
                        <Col sm="12">
                        <div className="panel-body">
                              <div className="form-group">
                                  <label>Departure Airport Name or Code</label>
                                  <input className="form-control" type="text"/>
                              </div>
                              <div className="form-group">
                                  <label>Flight Number</label>
                                  <input className="form-control" type="text"/>
                              </div>
                              <div className="form-group">
                                  <label>Select Date</label>
                                  <select className="form-control">
                                    <option>2021/07/30</option>
                                    <option>2021/07/31</option>
                                    <option>2021/08/01</option>
                                  </select>
                              </div>
                              <div className="form-group">
                                <Button color="primary" className="normal-button">Search</Button>
                              </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="13">
                      <Row>
                        <Col sm="12">
                        <div className="panel-body">
                              <div className="form-group">
                                  <label>Airport Code</label>
                                  <input className="form-control" type="text"/>
                              </div>
                             <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                      <label>Select Date</label>
                                      <select className="form-control">
                                        <option>2021/07/30</option>
                                        <option>2021/07/31</option>
                                        <option>2021/08/01</option>
                                      </select>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                      <label>Time Period</label>
                                      <select className="form-control">
                                        <option>12AM - 6PM</option>
                                        <option>6AM - 12PM</option>
                                        <option>12PM - 6PM</option>
                                      </select>
                                  </div>
                                </div>
                             </div>
                             <div className="form-group">
                                  <label>Airline Name or Code (optional)</label>
                                  <input className="form-control" type="text"/>
                              </div>
                              
                              <div className="form-group">
                                <Button color="primary" className="normal-button">Search</Button>
                              </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent> 
                </div>
              </div>
              <div className="col-sm-6">
                    <div className="tracker-right">
                      <h1>Travanya Flight Status Tracker</h1>
                      <h2>Search by – Flight, Route, or Airport</h2>
                    </div>
              </div>
          </div>
      </div>
    </div>
    
    
    <div className="popular_place jio_deal">
       <div className="container">
        
         <div className="tab-content">
         <Nav tabs>
     <NavItem>
       <NavLink
         className={classnames({ active: activeTab === '1' })}
         onClick={() => { toggle('1'); }}
       >
         Departures
       </NavLink>
     </NavItem>
     <NavItem>
       <NavLink
         className={classnames({ active: activeTab === '2' })}
         onClick={() => { toggle('2'); }}
       >
         Arrival
       </NavLink>
     </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
     <TabPane tabId="1" className="nav-tab">
      <div>
      Departures Text
      </div>
     </TabPane>
     <TabPane tabId="2" className="nav-tab">
      <div>
      Arrival Text
      </div>
     </TabPane>
    </TabContent>
    
         </div>
       </div>
    </div>  
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Travanya Flight Status Tracker
           </h2>
           <p>Want to check the live status of your flight schedule? Travanya’s flight status tracker will take you through the real-time flight status to keep you updated about the flight changes, if any. </p>
           <p>Several uncertain conditions like Air Traffic Control (ATC) restrictions, poor weather, and bird strikes can lead to flight delays. The reason it is important to have the flight status tracker option is to know about the sudden changes in the flight schedule, be it delays or cancellations.  </p>
           <p>If you are done waiting for long hours at the airport for your flight or searching for someone who was supposed to land at a specific time, it is recommended to use our flight status tracker option. Passengers can track flight status by three ways such as via flight, via route, and via airport details in the flight tracker bar. It is super convenient and is sure to save your time and strength. </p>
           </div>
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Flight Status Descriptions
           </h2>
           <ul className="arrival-dv status-dv">
              <li><i className="fa fa-circle"></i><b>Scheduled</b> : Flight is scheduled according to the airline’s timeline but yet to be airborne.</li>
              <li><i className="fa fa-circle"></i><b>In Air</b> : Flight is airborne</li>
              <li><i className="fa fa-circle"></i><b>Delayed</b> : Flight is later than its scheduled time. </li>
              <li><i className="fa fa-circle"></i><b>Diverted</b> : Flight has been redirected to another location.  </li>
              <li><i className="fa fa-circle"></i><b>Recovery</b> : Diverted flight departed to the scheduled destination. </li>
              <li><i className="fa fa-circle"></i><b>Cancelled</b> : Flight is not taking off, cancelled.  </li>
              <li><i className="fa fa-circle"></i><b>Landed</b> : Flight landed at the scheduled time. </li>
              <li><i className="fa fa-circle"></i><b>No Takeoff Info</b> : Flight status is unavailable. Contact the airline. </li>
            </ul>
        
       </div>
    </div>
    
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           How to Check the Arrival and Departure Flight Status by Flight, Route & Airport?
           </h2>
           <p>Know your flight status at the comfort of your place on Travanya. Save your energy and enjoy the happy-go-lucky journey. </p>
           <div className="route-section">
               <div className="row">
               <div className="col-sm-12">
                    <ul className="arrival-dv">
                      <li><i className="fa fa-plane"></i><b>Check Flight Status By Flight</b> – To track the status of your flight, enter the airline name or code, flight number, and departure date. </li>
                      <li><i className="fa fa-plane"></i><b>Check Flight Status By Route</b> – Track delays or cancellations by entering details of the departure airport, arrival airport, and departure date. </li>
                      <li><i className="fa fa-plane"></i><b>Check Flight Status By Airport</b> – Check the flight changes by entering the airport name or code, departure date, and time.</li>
                    </ul>
                </div>
               </div>
           </div>
       </div>
    </div>   
     <div className="question-dv">
        <div className="container">
        <h2 className="tittle_common">
          Frequently Asked Questions
           </h2>
        <h3>Q: Which day of the week is the best day to buy airline tickets?</h3>
        <p><b>Answer:</b>Monday midnight to Thursday midnight is the best time to book flight tickets. There are high chances to get low airfares during this time.</p>
        <h3>Q: How far ahead should I buy airline tickets?</h3>
        <p><b>Answer:</b>Booking your flight 50 days in advance from your date of departure can save you a lot.</p>
        <h3>Q: Which are the cheapest days to fly?</h3>
        <p><b>Answer:</b>Tuesday and Wednesday are the two cheapest days to fly.</p>
        <h3>Q: Which is the cheapest month to fly?</h3>
        <p><b>Answer:</b> January and September are considered to be the cheapest months to fly.</p>
        <h3>Q: How can I find the cheapest flights on Travanya?</h3>
        <p><b>Answer:</b>To grab the cheapest airfares, connect with our customer support agents and brief your requirements, and we will come up with the most economical flight options for you to choose from.</p>
        <h3>Q: How can I save money on flights?</h3>
        <p><b>Answer:</b>To save money on airfares, get your flight booked at least 50 days before the departure. You may also avail of flat discounts by using exclusive travel deals by Travanya.</p>
        <h3>Q: How to check my flight status?</h3>
        <p><b>Answer:</b>To check your flight status, log in to Travanya’s website and click on “My Booking”. Enter your departure and arrival date along with the time and booking reference number.</p>
        <h3>Q: How can I get a cheap last-minute flight?</h3>
        <p><b>Answer:</b> Last-minute flights are usually expensive. However, try being flexible with your travel date and time to grab cheaper options. You may also contact our support team to grab last-minute deals and offers.</p>

        </div>
    </div>
  
    
    <div className="newsletter">
     <div className="container">
         <div className="main_div parent">
             <div className="row">
               <div className="col-sm-6">
                   <img src="../assets/images/subscribe.svg"/>
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

export default App;
