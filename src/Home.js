import React,{ Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'

import { Navbar, Nav,Form,Button,ButtonGroup,Carousel} from '../node_modules/react-bootstrap';
import {List,Grid,Header,Segment,Container,Menu,Icon} from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  Link } from "react-router-dom";



function Home() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">
      <img
        alt="logo"
        src={logo}
        width="65"
        height="40"
        className="d-inline-block align-top"
      />
     {'Home Automation'}
    </Navbar.Brand>
    <Nav className="ml-auto">
    <ButtonGroup className="mr-3" aria-label="Second group">

    <Nav.Link >
        <Link to="/login">
        <Button   >
         
         Login 
      

       </Button>
    </Link>
    </Nav.Link>

    
    

        


   
  </ButtonGroup>


  <Nav.Link >
        <Link to="/signup">
        <Button 
         
         variant="secondary"
        
         >
          Sign Up
        </Button>
    </Link>
    </Nav.Link>

   
  

        
   </Nav>
  </Navbar>
   
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="570"
      alt="First slide"
      src="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/live-stress-less-life-with-iot-main.jpg"

     

    />
     
  </Carousel.Item>
  
  
</Carousel>
<Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
             
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                 Motivation 
              </Header>
                <p>
                 Now you can easily check electricity
              </p>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as='h4' content='Developed By' />
                <List link inverted>
                  <a href="https://www.linkedin.com/in/pratik-b-7961a5138/">@Pratik Bansal</a>
                  <br />
                  {/* <List.Item as='a'>@Pratik Bansal</List.Item> */}
                  <a href="https://www.linkedin.com/in/sahil19oz/">@Sahil Agarwal</a>
                  <br />
                  <a href="https://www.linkedin.com/in/vanisha-arora-0409a8181/">@Vanisha-Arora</a>
                  <br />
                  <a href="https://www.linkedin.com/in/vishal-tulsani-26926510a/">@Vishal Tulsani</a>

                </List>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
      </Segment></div>
  );
}

export default Home;
