import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact />
          </Switch>
        </Navbar>
      </Router>
      <section className="App-header">
        <h1 className="hero-h1">IHearYou</h1>
        <button buttonStyle=''>Enter</button> 
      </section>
    </>
  );
}

export default App;
