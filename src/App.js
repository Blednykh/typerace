import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";
import Menu from "./components/Menu";

class App extends Component {

  render() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Menu}/>
            <Route  path="/Game" component={Game} />
            </Switch>
        </Router>
    );
  }
}

export default App;
