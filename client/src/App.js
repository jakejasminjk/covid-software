import React from 'react';
import logo from './logo.svg';
import Main from './components/Pages/Main';
import DailyState from './components/Pages/DailyState';
import State_Search from './components/Pages/State_Search';
import Metadata from './components/Pages/Metadata';
import Login from './components/Pages/Login';
import Sign from './components/Pages/Sign';
import Navbar from './components/Navbar';
import ShowCase from './components/main/ShowCase'
import Screen from './components/main/Screen'

import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      dailyState: [],

      stateSearch:'',
      search: [],

      Metadata: [],

    };
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleScreen = this.handleScreen.bind(this)
  }

  //Readd name if doesnt work
  handleScreen(testPos, temp, contact, symptoms){
      axios.post('http://localhost:5000/users/screening',{
          //username:name,
          testedPos:testPos,
          temp:temp,
          hadContact:contact,
          hasSymptoms:symptoms
      }).then((response) => {
      console.log(response);
    })
  }

  handleSearch(searchP){
      this.setState({stateSearch: searchP})
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/${this.state.stateSearch}/daily.json`, {
          params: {
              _limit: 40
          }
      })
     .then(res => this.setState({ search: res.data}))
  }

  handleSignIn(username, password){
      //could also hash here
   axios.post('http://localhost:5000/users/add',{
       username:username,
       password:password
   }).then((response) => {
   console.log(response);
   this.setState({name:username})
   window.location.replace("http://localhost:3000/info")
 })
 };

 handleLogin(username, password){
  axios.post('http://localhost:5000/users/verify',{
      username:username,
      password:password
  }).then((response) => {
  console.log(response);
  this.setState({name:username})
})

};

handleLogout(){
 this.setState({name:''})
};


  componentDidMount() {
      //INFO
    axios.get('https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json',{
        params: {
            _limit: 40
        }
    })
   .then(res => this.setState({ data: res.data}))

     //DAILY STATE
   axios.get('https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/daily.json', {
       params: {
           _limit: 40
       }
   })
  .then(res => this.setState({ dailyState: res.data}))



    //SEARCH BY STATE
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/${this.state.stateSearch}/daily.json`, {
      params: {
          _limit: 40
      }
  })
 .then(res => this.setState({ search: res.data}))


  axios.get('https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/info.json', {
    params: {
      _limit: 20
    }
  })
  .then(res => this.setState({Metadata: res.data}))

 }




  render(){
    console.log(this.state.search)
    return (
    <Router>
    <React.Fragment>
      <Navbar handleLogout={this.handleLogout} Username={this.state.name}/>
      <Route exact path="/" render={props =>(
         <ShowCase handleSignIn={this.handleSignIn}/>
        )}/>
     <Route exact path="/screen" render={props =>(
          <Screen name={this.state.name} handleScreen={this.handleScreen}/>
        )}/>
      <Route exact path="/info" render={props =>(
         <Main datas={this.state.data}/>
        )}/>
     <Route exact path="/dailyState" render={props =>(
         <DailyState datas={this.state.dailyState}/>
        )}/>
    <Route exact path="/searchState" render={props =>(
         <State_Search
            handleSearch={this.handleSearch}
            state={this.state.stateSearch}
            datas={this.state.search}
        />
         )}/>
    <Route exact path="/Login" render={props =>(
        <Login handleLogin={this.handleLogin}/>
         )}/>
    <Route exact path="/Sign" render={props =>(
        <Sign handleSignIn = {this.handleSignIn}/>
        )}/>
    <Route exact path="/Metadata" render={props =>(
        <Metadata datas={this.state.Metadata}/>
        )}/>
    </React.Fragment>
    </Router>
  );}
}

export default App;
