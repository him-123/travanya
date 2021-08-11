import logo from './logo.png';
import transfer from './transfer.png';
import pic1 from './assets/images/pic1.jpg';
import './App.css';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,ButtonGroup,Button } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { LocalForm, Control } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';
import DatePicker from "react-datepicker";
import Select from 'react-select';


import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [isvalidate, setValidate] = useState(false);
  const [oneway, setOneWay] = useState(true);
  const [isPackage, setpackage] = useState(false);
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());

  const submit = () => {
    console.log('gjgjgh');
    setValidate(false);
  } 

  const handleSubmitFailed = () => {
    console.log('sfsdfd');
    setValidate(true);
    document.getElementById("myCheck").click();
  }
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'Aalborg', label: 'Aalborg' },
    { value: 'Aarhus', label: 'Aarhus' },
    { value: 'aberdeen', label: 'aberdeen' },
  ];


  
  return (
    <div className="App">
    <header className="header1">
     <div className="logo1">
     <Link to="/travanya"><img src={logo}/></Link>
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
    <div  className="main-form">
    <LocalForm
     model="user"
     
    >
      <ul>
        <li><a onClick={() => setpackage(false)} className={isPackage ? '' : 'active'}><i className="fa fa-plane mar_r5"></i>Flights</a></li>
        <li><a onClick={() => setpackage(true)} className={isPackage ? 'active' : ''}><i className="fa fa-umbrella mar_r5"></i>Package</a></li>
      </ul>
      {!isPackage &&
        <>
      <div className="switch-field">
          <ButtonGroup> 
            <Button onClick={() => setOneWay(true)} className={oneway ? 'active' :''}>Round Trip</Button>
            <Button onClick={() => setOneWay(false)} className={oneway ? '' :'active'}>One Way</Button>
          </ButtonGroup>
      </div>
      <div className="main_form">
        <div className="row ">
          
          <div className="col-lg-6 col-md-12">
              <div className="row">
              <div className="col-sm-6 ex-3 group-input">
                  <div className="form-group ff_input form-select1">
                  <label> <i className="fa fa-map-marker"/> Going From?</label>
                  {/* <input onClick={() =>submit() } onChange={()=>submit()}  required   className="form-control" type="text" placeholder="Delhi"/> */}
                  {/* <input list="browsers" name="myBrowser" placeholder="Type Here" required/>
                    <datalist id="browsers">
                      <option>dwq</option>
                      <option>dwq</option>
                    </datalist> */}
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      required
                    />
                  </div>	
              </div> 
                  
              <div className="col-sm-6 ex-3">
                  <a href=""><img className="transfer hidden-xs" src={transfer} alt="img"/></a>
                  <div className="form-group gap_extra border-gap">
                  <label><i className="fa fa-map-marker"/>To Where?</label>
                  <input onClick={() =>submit() } onChange={() => submit()}  required className="form-control" type="text" placeholder="Banglore"/>
                  </div>	  
              </div>
              </div>
          </div>
           <div className="col-lg-6 col-md-12">
        <div className="row">
          {oneway &&
         
        <div id="add_class" className="col-sm-3 col-xs-6 ex-3">
          <div className="form-group calender border-left1">
          <label><i className="fa fa-calendar"></i> Departure </label>
           <DatePicker className="form-control" onClick={() =>submit() } onChange={() => submit()}  selected={startDate} onChange={(date) => setStartDate(date)} placeholder="21 May" />
          {/*<input  required className="form-control" type="text" placeholder="21 May"/>*/}
             
    
         
          </div>
          </div>}
          {!oneway && 
         
            
        <div id="add_class" className="col-sm-6 col-xs-6 ex-3">
          <div className="form-group calender border-left1">
          <label><i className="fa fa-calendar"></i> Departure </label>
           <DatePicker className="form-control" onClick={() =>submit() } onChange={() => submit()}  selected={startDate} onChange={(date) => setStartDate(date)} placeholder="21 May" />
          {/*<input onClick={() =>submit() } onChange={() => submit()}  required className="form-control" type="text" placeholder="21 May"/>*/}
    
         
          </div>
          </div>}
          {oneway &&
        <div className="col-sm-3 col-xs-6 ex-3">
          <div id="return_optn" className="myText">		
          <div className="form-group calender">
          <label><i className="fa fa-retweet"></i>Return </label>

 <DatePicker className="form-control" onClick={() =>submit() } onChange={() => submit()}  selected={startDate1} onChange={(date) => setStartDate1(date)} placeholder="21 May" />
          {/*<input onClick={() =>submit() } onChange={() => submit()}  required className="form-control" type="text" placeholder="21 May"/>*/}          </div>
          </div>
         </div>
       }
       <div className="col-sm-6 col-xs-12 ex-3 traveller_input">
          <div className="form-group">
          <label><i className="fa fa-users"></i>Traveller &amp; Class</label>
          <select
          className="form-control" placeholder="1 Traveller"
                  onClick={() =>submit() } onChange={()=>submit()}
                >
                  <option value="">Traveller 1</option>
                  <option value="male">Adults</option>
                  <option value="female">Senior</option>

                </select>
          {/*<input onClick={() =>submit() } onChange={()=>submit()}  required className="form-control" placeholder="1 Traveller"/>*/}
              <p><span>Economy/Premium Economy</span></p>
          </div>
          </div>
     </div>

     </div>
   </div>
 </div>

          

         </>
         }


     {isPackage &&
        <>
     
      <div className="switch-field">
          <ButtonGroup> 
            <Button onClick={() => setOneWay(true)} className={oneway ? 'active' : ''}> Leisure</Button>
            <Button onClick={() => setOneWay(false)} className={oneway ? '' : 'active'}>Honeymoon</Button>
          </ButtonGroup>
      </div>
      <div className="main_form">
        <div className="row ">
          
          <div className="col-lg-6 col-md-12">
              <div className="row">
              <div className="col-sm-6 ex-3">
                  <div className="form-group ff_input">
                  <label> <i className="fa fa-map-marker"/> From Where?</label>
                  <input onClick={() =>submit() } onChange={()=>submit()}  required   className="form-control" type="text" placeholder="Delhi"/>
                  </div>  
              </div> 
                  
              <div className="col-sm-6 ex-3">
                  <a href=""><img className="transfer hidden-xs" src={transfer} alt="img"/></a>
                  <div className="form-group gap_extra border-gap">
                  <label><i className="fa fa-map-marker"/> To Where?</label>
                  <input onClick={() =>submit() } onChange={() => submit()}  required className="form-control" type="text" placeholder="Banglore"/>
                  </div>    
              </div>
              </div>
          </div>
           <div className="col-lg-6 col-md-12">
        <div className="row">
         
         
        <div id="add_class" className="col-sm-6 col-xs-6 ex-3">
          <div className="form-group calender border-left1">
          <label><i className="fa fa-calendar"></i> Travel Date  </label>
           <DatePicker className="form-control" onClick={() =>submit() } onChange={() => submit()}  selected={startDate} onChange={(date) => setStartDate(date)} placeholder="21 May" />
          {/*<input onClick={() =>submit() } onChange={() => submit()}  required className="form-control" type="text" placeholder="21 May"/>*/}
    
         
          </div>
          </div>
          <div className="col-sm-6 col-xs-12 ex-3 traveller_input">
          <div className="form-group">
          <label><i className="fa fa-users"></i>Travellers</label>
           <select
           className="form-control" placeholder="1 Traveller"
                  onClick={() =>submit() } onChange={()=>submit()}
                >
                  <option value="">Traveller 1</option>
                  <option value="male">Adults</option>
                  <option value="female">Senior</option>

                </select>
          {/*<input onClick={() =>submit() } onChange={()=>submit()}  required className="form-control" placeholder="1 Traveller"/>*/}
             
          </div>
          </div>
        </div>
      </div>
    
        </div>
        <div className="row new-down-form">
            <div className="col-sm-3">
                <div className="down-from">
                <label>Name<span>*</span></label>
                <input type="text" placeholder="Type here" required/>
                </div>
            </div>
            <div className="col-sm-3">
              <div className="down-from">
                <label>Email<span>*</span></label>
                <input type="text" placeholder="Type here" required/>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="down-from">
                <label>Phone<span>*</span></label>
                <input type="text" placeholder="Type here" required/>
              </div>
            </div>
        </div>
    
      </div>
      

    
       
      </>}
      <div className="btn_search text-center">
        {!isvalidate &&
      <button   className="btn btn-orange" id="myCheck"  type="submit"> <i onClick={ () => handleSubmitFailed() } className="fa fa-search">Submit</i> </button>

    }
    {isvalidate &&
      <button  disabled="disabled" className="btn btn-orange" > <i className="fa fa-search"></i> Validating</button>
    }
      </div>
    </LocalForm>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/ixc.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/ccu.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/del.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/yyc.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/yyz.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/sfo.jpg"/></a>
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
                       <a href="#"><img src="https://res.cloudinary.com/superfare/image/upload/Travanya/destinations/jfk.jpg"/></a>
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
           Easy Flight Options, Easier Flight Bookings
           </h2>
           <p>Have you ever wondered what the key aspect of planning a trip is? Flight booking it is! Whether you plan to travel domestically or internationally, for business or leisure, you’ll need a platform to help you with affordable flight tickets. If you’ve been looking for one such platform, your search ends here! Travanya is the best travel agency in India that specializes in offering personalized holiday planning and booking of cheap flight tickets. </p>
           <p>With us, you can be assured of getting flight tickets at the lowest prices. Be it a place in Bhutan, USA, or India, our travel experts will make sure you have the best flight itinerary. Get in touch with us via call or live chat and we’ll be glad to offer a helping hand. </p>
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
    <div className="bg_gray">
       <div className="container">
           <h3>Latest updates on COVID-19 safety regulations & guidelines</h3>
           <p>Learn about the precautionary measures to be taken by travellers to ensure a safe vacation</p>
           <a href="" className="btn-blue">Read More</a>
       </div>
    </div>
    <div className="popular_place jio_deal">
       <div className="container">
           <h2 className="tittle_common">Amazing International + Domestic Packages</h2>
           <div className="popular-tabs">
                 <ul>
                   <li className="active"><a>International</a></li>
                   
                   <li><a>Domestic</a></li>
                 </ul>
                 <div className="tab-content">
                     <div className="row">
                     <div className="col-sm-3">
                        <div className="item">
                             <a href="#">
                               <div className="image-block">
                                 <img src="https://www.travanya.com/wp-content/themes/trv/images/tmp/cool1.jpg"/>
                               </div>
                               <h4>Maldives</h4>
                               <span>
                                 <i className="fa fa-inr"></i>55,250 <i className="fa fa-arrow-right"></i>
                               </span>
                             </a>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="item">
                             <a href="#">
                               <div className="image-block">
                                 <img src="https://www.travanya.com/wp-content/themes/trv/images/tmp/cool2.jpg"/>
                               </div>
                               <h4>Dubai</h4>
                               <span>
                                 <i className="fa fa-inr"></i>55,250 <i className="fa fa-arrow-right"></i>
                               </span>
                             </a>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="item">
                             <a href="#">
                               <div className="image-block">
                                 <img src="https://www.travanya.com/wp-content/themes/trv/images/tmp/cool3.jpg"/>
                               </div>
                               <h4>Thailand</h4>
                               <span>
                                 <i className="fa fa-inr"></i>55,250 <i className="fa fa-arrow-right"></i>
                               </span>
                             </a>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="item">
                             <a href="#">
                               <div className="image-block">
                                 <img src="https://www.travanya.com/wp-content/themes/trv/images/tmp/cool4.jpg"/>
                               </div>
                               <h4>Singapore</h4>
                               <span>
                                 <i className="fa fa-inr"></i>55,250 <i className="fa fa-arrow-right"></i>
                               </span>
                             </a>
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

export default App;
