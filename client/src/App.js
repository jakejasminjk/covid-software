import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main';
import Navbar from './components/Navbar';
import SignIn from './components/Sign'
import axios from 'axios'
import Login from './components/Login'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
    };
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

  }
  componentDidMount() {
      //jake
    axios.get('https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json')
   .then(res => this.setState({ data: res.data}))
   //end
   this.setState({name: ""})
 }

 handleSignIn(username){
    axios.post('users/add',{
        username:username
    }).then((response) => {
    console.log(response);
  })
    this.setState({name:username})
  };


//THIS NEEDS WORK
  handleLogin(stateIn){
     axios.get('users/add',{
         username:stateIn
     })
     this.setState({name:stateIn})
   };

  render(){
    console.log(this.state.data)
    return (
    <Router>
    <React.Fragment>
      <Navbar name={this.state.name}/>

      //Jake
      <Route exact path="/" render={props =>(
          <Main datas={this.state.data}/>
          )}/>
    //
      <Route path="/SignUp" render={props =>(
          <React.Fragment>
          <SignIn stateVal= {this.state.stateVal} handleSignIn={this.handleSignIn}/>
          </React.Fragment>
          )}/>
     <Route path="/Login" render={props =>(
          <React.Fragment>
          <Login stateVal= {this.state.stateVal} handleLogin={this.handleLogin}/>
          </React.Fragment>
          )}/>
    </React.Fragment>
    </Router>
  );}
}

export default App;
