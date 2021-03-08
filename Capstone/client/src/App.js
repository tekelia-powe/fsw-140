import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Main from './pages/Main.js';
import Search from './pages/Search.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  
    return (
      <div>
      
        
      {/* <Movies /> */}
      <Router>
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
  
        <Route path="/main">
       
          <Main/>
             
        </Route>
  
        <Route path="/search">
          <Search />
        </Route>
  
      </Switch>
      </Router>
      </div>
    );
  }
  
  
  export default App;