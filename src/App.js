import React from 'react';
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout.js';
import Landing from './Landing.js';
import Pokelist from './Pokelist.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Layout>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/pokelist' component={Pokelist} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
