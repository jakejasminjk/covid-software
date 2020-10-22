import React from 'react';
import logo from './logo.svg';
import Main from './components/Pages/Main';
import DailyState from './components/Pages/DailyState';
import Navbar from './components/Navbar';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dailyState: [],
    };
  }
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
         <Main datas={this.state.data}/>
        )}/>
     <Route exact path="/dailyState" render={props =>(
         <DailyState datas={this.state.dailyState}/>
        )}/>
    </React.Fragment>
    </Router>
  );}
}

export default App;
