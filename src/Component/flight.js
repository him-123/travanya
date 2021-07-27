// import logo from '../logo.png';
// import transfer from './transfer.png';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,ButtonGroup,Button } from 'reactstrap';
import classnames from 'classnames';


function Flight() {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
  return (
    <div className="App">
      Flight page
    </div>
  );
}

export default Flight;
