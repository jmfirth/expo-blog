import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Route } from './lib/react-router';
import { Layout } from './components';
import { Home, About } from './screens';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
