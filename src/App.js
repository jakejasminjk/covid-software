import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import DataT from './components/DataT';
import SignIn from './components/Sign'
import Show from './components/Show'
import CssBaseline from '@material-ui/core/CssBaseline';
//import Link from '@material-ui/core/Link';
//import Container from '@material-ui/core/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stateVal: 'NONE'};

    this.handleState = this.handleState.bind(this);
  }
  handleState(state, stateNum){
    this.setState({ stateVal: state}, () => {
    console.log(this.state.stateVal, 'state is set');
  });
  }

  render(){
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Nav name="Contact Tracing America"/>
          <Route exact path="/" render={props =>(
          <Main />
          )}/>
          <header>
          </header>
          <Route path="/info" render={props =>(
          <React.Fragment>
          <SignIn stateVal= {this.state.stateVal} handleState={this.handleState}/>
          </React.Fragment>
          )}/>
          <Route path="/info/rev" render={props =>(
          <React.Fragment>
          <Show stateVal= {this.state.stateVal}/>
          </React.Fragment>
          )}/>
          <Route path="/data" render={props =>(
          <React.Fragment>
          <DataT />
          </React.Fragment>
          )}/>
      </React.Fragment>
     </Router>
  )};
}

export default App;
