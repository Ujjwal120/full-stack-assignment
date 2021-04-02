import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Tab1 from './components/Tabs/Tab1';
import Tab2 from './components/Tabs/Tab2';
import Tab3 from './components/Tabs/Tab3';
import Navigation from './shared/components/Navigation';
import './App.css';


const App = () => {
  return <Router>
    <Navigation />
    <main id = 'main'>
      <Switch>
        <Route path = "/nature" exact>
          <Tab1 genre = "nature" />
        </Route>

        <Route path = "/tech" exact>
          <Tab2 genre = "tech" />
        </Route>

        <Route path = "/festival" exact>
          <Tab3 genre = "festival" />
        </Route>

        <Redirect to = "/nature" />
      </Switch>
    </main>
  </Router>;
}

export default App;