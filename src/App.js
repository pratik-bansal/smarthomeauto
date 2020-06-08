import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import * as firebase from "firebase/app";
import "firebase/auth";
import Home from './Home';
import { BrowserRouter as Router, Link, Route, withRouter } from "react-router-dom";
import axios from "axios";
import Login from './Login';
import Signup from './Signup' ;






// import { Navbar, Nav,Form,Button,ButtonGroup,Carousel} from '../node_modules/react-bootstrap';
import {List,Grid,Header,Segment,Image, Message,Form,Button,Icon,Divider} from 'semantic-ui-react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';


///////////firebase config ////////////////

var firebaseConfig = {
  apiKey: "AIzaSyAxQR2AOF7nlv6p-NIvMpUOQOMrhWHZcLs",
  authDomain: "smarthomeautomation-bbbbe.firebaseapp.com",
  databaseURL: "https://smarthomeautomation-bbbbe.firebaseio.com",
  projectId: "smarthomeautomation-bbbbe",
  storageBucket: "smarthomeautomation-bbbbe.appspot.com",
  messagingSenderId: "440685118216",
  appId: "1:440685118216:web:b87110e2c9adf5a87fa2bd",
  measurementId: "G-15XC6192SP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  name: "", email: "", password: "", phone: "", uid: "" }
    this.state.db = {
      books: [],
      mybooks: []
    }

  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
//////////////////////////////////////////////////////////////////////////////////


  handleChange(evt) {  //////// set the value in get 
    this.setState({ [evt.target.name]: evt.target.value });
  }


  


  handlephoneChange(evt) { /// set the phone no length 
    var len = evt.target.value.length;
    if (len <= 10) {

      this.setState({
        phone: evt.target.value
      })
    }

  }

  

  //////// checkuser in database /////// 

  checkuser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var email = user.email;
        this.setState({
          email: email
        })
        this.storeuserdata();
        this.books();

        this.props.history.push('/');


      } else {
        // No user is signed in.

        this.props.history.push("/");
      }

    });

  }

///////////logout function ////////////

  logout = () => { 

    firebase.auth().signOut().then(() => {
      this.props.history.push("/");
    }).catch(function (error) {
      // An error happened.
    });
  }


  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      // ...
    });
  }

  signin() {

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.

      this.props.history.push('/');
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);

      var errorMessage = error.message;
      // ...
    });
  }

  /////// called API to store the data into data base  //////////////////

  storeuserdata = () => {
    let obj = { name: this.state.name, email: this.state.email, phone: this.state.phone };
    axios.post('http://localhost:8080/user', obj)
      .then((res) => {
        this.setState(
          {
            name: res.data.name,
            email: res.data.email,
            uid: res.data._id,
            phone: res.data.phone
          }
        )
      })
  }





///////////// update user profile informations //////////////////

  updateuser = () => {
    let obj = { uid: this.state.uid, name: this.state.name, email: this.state.email, phone: this.state.phone };
    axios.put('http://localhost:8080/updateuser', obj).then((res => { console.log(res) }))

  }

///////// google login function //////////////

  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var user = result.user;
      this.setState({
        name: user.displayName
      })
      this.setState({
        email: user.email
      })


      this.props.history.push('/login');

      // ...
    }).catch(function (error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;

      var errorMessage = error.message;

      // The email of the user's account used.
      var email = error.email;


      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  componentDidMount() {
    this.checkuser();

  }



  render() {

    return (<div>

      <Route path="/" exact render={() => <Home ></Home>} />
      <Route path="/login"  render={()=><Login googleLogin={this.googleLogin.bind(this)}></Login>}></Route>
      <Route path="/signup"  render={()=><Signup signup={this.signup.bind(this)} handleChange={this.handleChange.bind(this)}></Signup>}></Route>
      
    </div>
    );
  }

}
export default withRouter(App);