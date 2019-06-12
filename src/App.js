import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import { history } from './redux/store'

function App() {
  return (
    <Container>
      <Router history={history}>
        <Route/>
      </Router>
    </Container>
  );
}

export default App;
