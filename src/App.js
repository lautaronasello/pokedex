import React from 'react';
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout.js';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
