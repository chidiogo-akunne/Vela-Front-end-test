import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './View/Index';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Index} />
      </Router>
  </div>
  );
}

export default App;
