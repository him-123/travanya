import logo from './logo.png';
import transfer from './transfer.png';
import pic1 from './assets/images/pic1.jpg';
import './App.css';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,ButtonGroup,Button } from 'reactstrap';
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
                       <a href="#"><img src="../assets/images/pic1.jpg"/></a>
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
           <p>Life is too short to stay at home. Planning your trip to your dream destination is an ideal thing to do. Book your air tickets to experience new cultures, meet new people and explore the beauty of nature. With a plethora of online flight booking options available today. You can compare ticket prices from several airlines, book the best for yourself and wander through the places where you always wanted to go. </p>
           <p>Travelling is about letting go and living in the moment. With a hassle-free flight booking experience, Travanya will help you discover beautiful corners and people of the world. We assure you of easy accessibility to browse the most suitable flight options according to your needs and preferences. Now, forget your anxieties and dare to embark on new challenges to live in harmony with nature and culture. With <a>cheap flight tickets</a>, push yourself beyond your comfort zone.</p>
       </div>
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Domestic Air Ticket Bookings
           </h2>
           <p>India has 103 domestic airports with the busiest airport in Delhi, Indira Gandhi International Airport. Delhi being the epicentre of the country handles more than 200 domestic flights each day. The route from Delhi to Mumbai and Mumbai to Goa is the most popular and preferred by Indian travellers </p>
           <p>A large number of searches are also found for <a>flights to DEL</a> from JAI, Lucknow, Andaman, Chandigarh, Cochin and Hyderabad. The top airlines that serve domestic flights are <a>IndiGo</a>, Air India, Go Air, <a>AirAsia</a> India and Vistara. </p>
       </div>
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Top Domestic Routes For Direct Flights
           </h2>
           <div className="route-section">
               <div className="row">
               <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Delhi to Mumbai (DEL to BOM)</a></li>
                      <li><a><i className="fa fa-plane"></i>Mumbai to Delhi (BOM to DEL)</a></li>
                      <li><a><i className="fa fa-plane"></i>Mumbai to Goa (BOM to GOI)</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Delhi to Goa (DEL to GOI)</a></li>
                      <li><a><i className="fa fa-plane"></i>Kolkata to Delhi (CCU to DEL)</a></li>
                      <li><a><i className="fa fa-plane"></i>Mumbai to Bangalore (BOM to BLR)</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Pune to Delhi (PNQ to DEL)</a></li>
                      <li><a><i className="fa fa-plane"></i>Kolkata to Chennai (CCU to MAA)</a></li>
                      <li><a><i className="fa fa-plane"></i>Chennai to Pune (MAA to PNQ)</a></li>
                    </ul>
                </div>
               </div>
           </div>
       </div>
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Domestic Plane Ticket Airfares
           </h2>
           <p>The air ticket prices to travel in India depends on airlines and route connectivity. However, an average economy class flight from DEL to BOM starts from INR 2596 and an average airfare from BOM to GOI starts from INR 2431. </p>
       </div>
     
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           International Airline Ticket Bookings
           </h2>
           <p>India has 34 international airports with more than 90 flights flying per day to other countries. <a>Indira Gandhi International Airport (DEL)</a>, Chhatrapati Shivaji Maharaj International Airport (BOM) and Chennai International Airport (MAA) handle the most <a>international flights. </a></p>
            <p>You may also find flights from Delhi, Mumbai and <a>Chennai to Melbourne</a>, Mauritius, Maldives, Auckland, Bali, Tokyo, Beijing and more than 90 other international cities. </p>
            <p>Major airlines serving international flights from India are Scoot Airlines, <a>United Airlines</a>, Delta Airlines, <a>Air India</a> and Air Canada.</p>
       </div>
    </div>
    <div className="flight-dv">
       <div className="container">
           <h2 className="tittle_common">
           Top International Routes For Direct Flights
           </h2>
           <div className="route-section">
               <div className="row">
               <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Flights to Canada</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Australia</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Thailand</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Flights to USA</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Singapore</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Switzerland</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul>
                      <li><a><i className="fa fa-plane"></i>Flights to UK</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Hong Kong</a></li>
                      <li><a><i className="fa fa-plane"></i>Flights to Maldives</a></li>
                    </ul>
                </div>
               </div>
           </div>
       </div>
    </div>
    <div className="flight-dv mb15">
       <div className="container">
           <h2 className="tittle_common">
           International Airline Ticket Bookings
           </h2>
           <p>One-way International flight from India to the USA or Canada can cost you around INR 56999 to INR 79,999. However, the air ticket prices also depend on the airlines, travelling class and route connectivity.</p>
           <a>
            <img src="https://www.travanya.com/wp-content/themes/trv/images/first.webp"/>
          </a>
       </div>
    </div>
    <div className="flight-dv ">
       <div className="container">
           <h2 className="tittle_common">
           Tips To Book Cheap Flight Tickets
           </h2>
          <ul className="flight-tick">
            <li>
               <i className="fa fa-check-circle"></i>To enjoy low fares on air ticket booking, it is cheaper to fly during weekdays like from Monday midnight to Thursday midnight.
            </li>
            <li>
               <i className="fa fa-check-circle"></i>Choose local airlines as they are relatively cheaper. You might have to compromise on other aspects such as luggage capacity if that’s not an issue for you. 
            </li>
            <li>
               <i className="fa fa-check-circle"></i>Be flexible with payment methods because paying for air tickets via a specific e-wallet or credit card can help you save a few bucks. 
            </li>
            <li>
               <i className="fa fa-check-circle"></i>The right time for booking flight tickets is during the off-season. Just a little research on your destination’s off-season can help you get cheaper flights. 
            </li>
            <li>
               <i className="fa fa-check-circle"></i>Pick alternative routes for both domestic and international flight (if there is no medical emergency) over direct flights to save more money.
            </li>

          </ul>
          <div className="best_airlines">
              <div className="row">
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/AirAsia.webp"></img>
                        <p>AirAsia</p>
                      </div>
                  </div>
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/AirCanada.webp"></img>
                        <p>AirCanada</p>
                      </div>
                  </div>
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/AirIndia.webp"></img>
                        <p>AirIndia</p>
                      </div>
                  </div>
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/American.webp"></img>
                        <p>American</p>
                      </div>
                  </div>
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/Etihad.webp"></img>
                        <p>Etihad</p>
                      </div>
                  </div>
                  <div className="col-sm-2">
                      <div className="airline-inner">
                        <img src="https://res.cloudinary.com/superfare/image/upload/Travanya/ChinaEastern.webp"></img>
                        <p>ChinaEastern</p>
                      </div>
                  </div>
              </div>
          </div>

       </div>
    </div>
    <div className="flight-dv martb15">
       <div className="container">
           <h2 className="tittle_common">
           Deals & Offers On Online Flight Ticket Bookings
           </h2>
           <p>The online flight booking process allows you to compare the prices of several airlines and reserve the one that suits you best. Whether you want to make your long haul flight comfortable or just want to reach the destination, you can choose from an array of ticket booking offers and discounts. </p>
           <p>Travanya’s latest travel deals can help you plan your trip at the lowest airfare. From <a> business class deals</a> to group deals and festive deals to <a>last minute deals</a>, our website has offers that are ideal for every traveller. Our strong association with airline consolidators helps in getting you surprising discounts on airfares for both economy and business class.</p>
       </div>
    </div>
    <div className="container">
       <div className="choose-dv ">
         <div className="light_bg">
             <h2 className="tittle_common">Why Choose Travanya?</h2>
             <div className="row">
             <div className="col-sm-3">
               <img src="../assets/images/why1.png"/>
               <h4>Certified Company</h4>
             </div>
             <div className="col-sm-3">
               <img src="../assets/images/why2.png"/>
               <h4>Secure Payment Methods</h4>
             </div>
             <div className="col-sm-3">
               <img src="../assets/images/why3.png"/>
               <h4>Quick Response To Queries</h4>
             </div>
             <div className="col-sm-3">
               <img src="../assets/images/why4.png"/>
               <h4>No Hidden Charges</h4>
             </div>
             </div>
         </div>
       </div>
    </div>
    <div className="flight-dv mb15">
       <div className="container">
           <h2 className="tittle_common">
           Why Book Flight Tickets With Travanya?
           </h2>
           <p>Travelling is a life-changing experience that can help you connect with people across borders, cultures, religions and understanding. Travanya will help you in organising budget-friendly travel with cheaper flight tickets and other amenities. We aspire to refrain from hidden charges and other convenience fees, which results in providing cost-efficient airfares to our customers.</p>
           <a>
            <img src="https://www.travanya.com/wp-content/themes/trv/images/second.webp"/>
          </a>
          <p className="mt15">Whether you want to board a Delhi flight at the last minute or have planned a luxury getaway with your spouse, travel deals at Travanya will get you amazing discounts and deals to make your journey more convenient. Just a single call to our travel agents can save you up to 35% on your ticket prices. </p>
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
