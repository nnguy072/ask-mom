import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Header from './components/layout/header/Header';
import Landing from './components/landing/Landing';
import { useDispatch } from 'react-redux';
import { loadUser } from './services/auth';
import setAuthToken from './utils/setAuthToken';

// doesn't seem like the right place to put it
if (localStorage.token)
	setAuthToken(localStorage.token);

function App() {
  const dispatch = useDispatch();

  dispatch(loadUser());

  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Header />
          <Container fluid>
            <Route exact path="/" component={Landing} />
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
