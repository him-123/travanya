import logo from './logo.png';
import transfer from './transfer.png';
import pic1 from './assets/images/pic1.jpg';
import './App.css';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,ButtonGroup,Button,CardTitle, CardText, Row, Col,Card } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


function AppDeals() {

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
      <div className="btn_search text-center"><button className="btn btn-orange" type="submit"> <i className="fa fa-search"></i> Search</button></div>
    
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
    
    <div className="popular_place jio_deal">
       <div className="container">
         <h2>Book Cheap Airline Tickets on Travanya</h2>
         <div className="tab-content">
         <Nav tabs>
     <NavItem>
       <NavLink
         className={classnames({ active: activeTab === '1' })}
         onClick={() => { toggle('1'); }}
       >
         INTERNATIONAL
       </NavLink>
     </NavItem>
     <NavItem>
       <NavLink
         className={classnames({ active: activeTab === '2' })}
         onClick={() => { toggle('2'); }}
       >
         DOMESTIC
       </NavLink>
     </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
     <TabPane tabId="1" className="nav-tab">
       <div className="holiday top_flights">
           <div className="col row ">
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"> <img src={pic1}/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           DEL<small>New Delhi</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           JFK<small>New York</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 63,666 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/ord.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           DEL<small>New Delhi</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           EWR<small>NewARK</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 66,538 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/lga.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           DEL<small>New Delhi</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           YYZ<small>Toranto</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                           20 Jul - 01 Aug 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 74,538 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/sfo.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           DEL<small>New Delhi</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           ORD<small>Chicago</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                           20 Jul - 01 Aug 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 66,538 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
           </div>
       </div>
     </TabPane>
     <TabPane tabId="2" className="nav-tab">
       <div className="holiday top_flights">
       <div className="col row">
       <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/yyz.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           GIO<small>Vasco da Gama</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           BOM<small>Mumbai</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 63,666 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/ewr.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           DEL<small>New Delhi</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           JFK<small>New York</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 63,666 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/ixc.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           GIO<small>Vasco da Gama</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           BOM<small>Mumbai</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 63,666 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 form-group">
               <div className="thumb">
                 <div className="row">
                     <div className="col-sm-3">
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/maa.jpg"/></a>
                     </div>
                     <div className="col-sm-9 inner_thumb">
                       <ul>
                         <li>
                           GIO<small>Vasco da Gama</small>
                         </li>
                         <li>
                         <i class="fa fa-exchange" aria-hidden="true"></i>
                         </li>
                         <li>
                           BOM<small>Mumbai</small>
                         </li>
                       </ul>
                     </div>
                       <div className="ond">
                           <span className="pull-left ond1">
                               21 Jul - 27 Jul 21
                           </span>
                           <span className="pull-right ond2">
                               <i className="fa fa-inr"></i> 63,666 <i className="fa fa-arrow-right"></i>
                           </span>
                       </div>
                 </div>
               </div>
             </div>
       </div>
       </div>
    
    
      
     </TabPane>
    </TabContent>
    
         </div>
       </div>
    </div>  
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Enjoy Cheap Flight Ticket Bookings Online
           </h2>
          <p>Travelling is an unparalleled experience that gives you lifelong memories and amazing stories to tell and Travanya works 24×7 to make sure you have the best one. We will get you the most competitive flight offers for you to explore different cultures, destinations and encounter incredible people. </p> 
         <p>Whether you want a relaxing break under the tropical beauty or looking to explore cities with a lot of history and architecture, we will arrange the cheapest yet comfortable flight deals as per your needs. Travel planning experts at Travanya ensure flexibility and will customize your deals just the way you want. Now explore breathtaking natural wonders and sensory discoveries without any worries because our flight booking offers are there to the rescue. </p>
          </div>
    </div>
    <div className="flight-dv deal-dv mb15">
       <div className="container">
           <h2 className="tittle_common">
           Deals Designed for You
           </h2>
        <div className="row">
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/student-flights.jpg"/>
              <b>Student Flights</b>
             </div>
          </div>
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/non-stop-flights.jpg"/>
              <b>Non Stop Flights</b>
             </div>
          </div>
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/round-trip-flights.jpg"/>
              <b>Round Trip Flights</b>
             </div>
          </div>
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/direct-flights.jpg"/>
              <b>Direct Flights</b>
             </div>
          </div>
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/last-minute-flights.jpg"/>
              <b>Last Minute Flights</b>
             </div>
          </div>
          <div className="col-sm-2">
             <div className="thumb">
               <img src="https://res.cloudinary.com/travanya/image/upload/v1624865118/flight/deals/one-way-flights.jpg"/>
              <b>One Way Flights</b>
             </div>
          </div>
        </div>
           </div>
    </div>
    
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           What Type of Travel Deals Can I Get?
           </h2>
         <p>If you have been waiting to book your flights to your dream destination, we have a super-useful collection of cheap travel deals that can make your experience memorable for life. </p>
        <div className="deal-tabs">
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Call-Only Deals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Festive Deals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Business Class Deals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Last-Minute Deals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Group Deals
          </NavLink>
        </NavItem>

      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="deal-content">
                 <p>Are bucket-list moments calling you? Gone are days when travel was super expensive. Now you can avail up to 40% off with our call-only deals. Your single call to our travel experts can lock in prices before they go up and can save you a lot of bucks. Call-only deals are only effective for offline bookings.</p> 
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="deal-content">
                  <p>Planning a surprise visit to your special one’s place on Christmas? Our exclusive festive deals can get you budget-friendly flights and packages even during the peak season. Whether you want to spend just a weekend with your loved ones or the whole week, our festive deals ensure the cheapest airline deals and packages.</p>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div className="deal-content">
                <p>Want to fly in style and comfort but at economical prices? Check out amazing flight offers today at Travanya and pack your bags for special private excursions. Business-class tickets with exceptional food and drinks, impressive hospitality and multiple entertainment options can make the long-haul flight experience splendid.</p>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <div className="deal-content">
                <p>Looking for a last-minute getaway? Snag your seat at a significant discount with our last-minute deals. We have a span of travel deals and discounts to embrace your experience. If in hurry, check out our last-minute flight ticket offers, book and pay directly on our website.</p>
                 </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
              <div className="deal-content">
               <p>Did you wake up this morning feeling like you should be on some island with your friends? Well, you should be on an island. Our group deals can make your big dream vacation true because we believe travel is the most fun with family and friends. Hop on the site to check cost-efficient airfare deals, special amenities and more.</p>
               </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
        </div>
         
          </div>
     
    </div>
    
    <div className="flight-dv martb15">
       <div className="container">
           <h2 className="tittle_common">
           Why Choose Travanya For Travel Deals?
           </h2>
           <p>Do you want to chase freedom and jump back into flights? Our expertise in featuring the most economical flight tickets, affordable <b>holiday packages</b>, luxury travel deals and adventure group discounts will gear you up for a memorable getaway. </p>
           <p>Whether you want to explore something new or revisit your favourite destination, We understand your travel needs and have a solution for all your travel doubts. Now delve deep into the spiritual dimensions of travel as special discounts and <a>deals at Travanya</a> will keep your spark of adventure alive. We bring you the best flight deals by catering to your travel needs with our motto, “If you want it, we’ll get it for you.”

</p>
           </div>
    </div>
    <div className="container">
       <div className="choose-dv ">
         <div className="light_bg">
             <h2 className="tittle_common">Why Choose Travanya?</h2>
             <div className="row">
             <div className="col-sm-3">
               <img src="https://www.travanya.com/wp-content/themes/trv/images/why1.png"/>
               <h4>Certified Company</h4>
             </div>
             <div className="col-sm-3">
               <img src="https://www.travanya.com/wp-content/themes/trv/images/why2.png"/>
               <h4>Secure Payment Methods</h4>
             </div>
             <div className="col-sm-3">
               <img src="https://www.travanya.com/wp-content/themes/trv/images/why3.png"/>
               <h4>Quick Response To Queries</h4>
             </div>
             <div className="col-sm-3">
               <img src="https://www.travanya.com/wp-content/themes/trv/images/why4.png"/>
               <h4>No Hidden Charges</h4>
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

export default AppDeals;
