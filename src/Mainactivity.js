import React,{ Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'

import { Navbar, Nav,Form,Button,ButtonGroup,Carousel} from '../node_modules/react-bootstrap';
import {List,Grid,Header,Segment,Container,Menu,Icon} from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  Link } from "react-router-dom";
import MainNavBar from './MainNavBar';
import MainFooter from './MainFooter';



function Mainactivity({logout,username}) {
  return (
    <div>
        <MainNavBar  logout={logout} username={username}></MainNavBar>

  
   
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="570"
      alt="First slide"
      src="https://www.sureuniversal.com/wp-content/uploads/2018/08/shutterstock_1107359975.jpg"

     

    />
     
  </Carousel.Item>
  
  
</Carousel>


<MainFooter logout={logout}></MainFooter>
      
      
      </div>
  );
}

export default Mainactivity;
