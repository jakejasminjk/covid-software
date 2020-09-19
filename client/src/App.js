import React from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import Navbar from './components/Navbar';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json')
   .then(res => this.setState({ data: res.data}))
 }
  render(){
    console.log(this.state.data)
    return (
    <React.Fragment>
      <Navbar />
      <Main datas={this.state.data}/>
    </React.Fragment>
  );}
}

export default App;
