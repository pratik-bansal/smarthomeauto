import React,{ Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'


import {Grid,Header,Image, Message,Form,Button,Icon,Divider} from 'semantic-ui-react';


function Signup(props) {
  return (
    <div>
       <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Signup Page
      </Header>
    </Divider>
        <div className="sellbook">
        <Grid stackable centered columns={2}>
          <Grid.Row>
          <Grid.Column width={8} >
        <Form className='attached fluid ' >
        
          <Form.Input name="Name"  required label='NAME'  type='text' placeholder="Name" onChange={props.handleChange} /> 
          <br />
          <Form.Input name="Email"  required label='Email'  type="email" placeholder="Enter email" onChange={props.handleChange} /> 
          <br />
          <Form.Input name="Password"  required label='Password'  type="password" placeholder="Password"  onChange={props.handleChange} /> 
          <br />
          <Form.Input name="Phonenumber"  required label='Phonenumber'  type='text' placeholder="Phone NO" maxLength="10"   onChange={props.handleChange} /> 
          <br />
          
      <br />
      <Form.Checkbox inline  label='I agree to the terms and conditions ' required />
      
     

  
    
     
    </Form>
   
    
   
   
    </Grid.Column>
    <Grid.Column width={5} centered >

    
   
    <Image src={logo} className="img1" rounded/>
    <input type="file" ></input>
    <Button icon labelPosition='left' >
        <Icon name='upload' />
        Upload Image
      </Button>
    
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <Grid stackable centered>
      
      <Grid.Row>
     

     

      
      <Grid.Column width={8} >
        <Button     size='big' fluid   primary     onClick={props.signup} 
        
       
        >
     Submit Details

    </Button>
    </Grid.Column>
    <Grid.Column width={5} >

     
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </div>
  </div>
  );
}

export default Signup;
