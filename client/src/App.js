import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SignIn from './components/Sign'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleState = this.handleState.bind(this)
  }
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json')
   .then(res => this.setState({ data: res.data}))
 }

 handleState(stateIn){
    axios.post('users/add',{
        username:stateIn
    })
  };


  render(){
    console.log(this.state.data)
    return (
    <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" render={props =>(
          <Main datas={this.state.data}/>
          )}/>
      <Route path="/SignUp" render={props =>(
          <React.Fragment>
          <SignIn stateVal= {this.state.stateVal} handleState={this.handleState}/>
          </React.Fragment>
          )}/>
    </React.Fragment>
    </Router>
  );}
}

export default App;
