  import React from 'react';
  import { Button, Icon,Dropdown, Popup,Menu } from 'semantic-ui-react';
  import { Navbar, Nav,Form,FormControl} from '../node_modules/react-bootstrap';
  import {  Link } from "react-router-dom";
  import logo from './logo.svg';
  import Mainactivity from './Mainactivity';

  function MainNavBar({logout,username}){
          return (
    <div>
          <Navbar bg="dark" variant="dark" expand="lg"  fixed='top' inverted>
  <Link to="/Mainactivity">
    <Navbar.Brand href="">
    <img
          alt="logo"
          src={logo}
          width="65"
          height="40"
          className="d-inline-block align-top"
        />
      {'Home Automation'}
    </Navbar.Brand>
    </Link>
    {/* <Menu.Item as='a'>Home</Menu.Item> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav.Link >
          <Link to="/Mainactivity">
      <Button icon labelPosition='left' >
      
        <Icon name='file video outline' fluid />
        VideoX
      </Button>
      </Link>
      </Nav.Link>

      <Nav.Link >
          <Link to="/Mainactivity">
      <Button icon labelPosition='left' >
      
        <Icon name='newspaper outline' fluid />
        CurateX
      </Button>
      </Link>
      </Nav.Link>

      
      <Nav.Link >
    

    
  <Popup content='Add users to your feed' trigger={<Button icon='bell' / >} />
  </Nav.Link>
    
    <Nav.Link>

      <Dropdown  text={username}  icon='user'  labeled button className='icon' direction='left' >
      <Dropdown.Menu>
    
        {/* <Dropdown.Item onClick={} >  <Icon name="book" ></Icon>  My Books </Dropdown.Item> */}
        <Dropdown.Item  > <Link to="/profile">  <Icon name="edit" ></Icon> Personel Info </Link> </Dropdown.Item>
        <Dropdown.Divider />
      
        
        <Dropdown.Item onClick={logout} > <Icon name="log out" ></Icon>  Log out </Dropdown.Item>
      
      
      </Dropdown.Menu>
    </Dropdown> 
    </Nav.Link>
    
    </Nav>

    </Navbar.Collapse>

  </Navbar>
</div>
 );
          }

  export default MainNavBar