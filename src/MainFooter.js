import React from 'react';
import { List, Grid, Header, Segment, Container,Divider,Image } from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

import logo from './logo.svg';





function MainFooter({ logout }) {
  return (
    <div>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <Link to="/mainactivity">
                    <List.Item as='a'>Home</List.Item>
                  </Link>
                  <List.Item as='a'>Contact Us</List.Item>
                  <Link to="/profile">
                    <List.Item as='a'>Profile</List.Item></Link>

                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <Link to="/mainactivity">
                    <List.Item as='a' >VideoX</List.Item>
                  </Link>
                  <List.Item as='a'>CurateX</List.Item>
                  <List.Item as='a' onClick={logout} >LogOut</List.Item>

                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                 Motivation 
              </Header>
                <p>
                Now you can easily check electricity.
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

          <Divider inverted section />
        <Image centered size='mini' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>

        </Container>
      </Segment>
    </div>
  );
}


export default MainFooter;