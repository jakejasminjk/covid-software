import React from 'react';
import logo from './logo.svg';
import Main from './components/Pages/Main';
import DailyState from './components/Pages/DailyState';
import Login from './components/Pages/Login';
import Sign from './components/Pages/Sign';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dailyState: [],
    };
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
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

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json')
   .then(res => this.setState({ data: res.data}))
   axios.get('https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/daily.json')
  .then(res => this.setState({ dailyState: res.data}))
 }
  render(){
    console.log(this.state.data)
    return (
    <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" render={props =>(
         <Dashboard />
        )}/>
      <Route exact path="/info" render={props =>(
         <Main datas={this.state.data}/>
        )}/>
     <Route exact path="/dailyState" render={props =>(
         <DailyState datas={this.state.dailyState}/>
        )}/>
    <Route exact path="/Login" render={props =>(
        <Login/>
         )}/>
    <Route exact path="/Sign" render={props =>(
        <Sign />
        )}/>
    </React.Fragment>
    </Router>
  );}
}

export default App;
