import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Wiki.css'
import Wiki from './Wiki.js';
import Home from './Home.js';

class App extends Component {
  render() {
   return (
     <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wiki" component={Wiki} />
        </Switch> 
      </Router>
    </Fragment>
   );
  }
}

export default App;
