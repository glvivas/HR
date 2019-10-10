import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Employees from './Components/Employees';
import Proyects from './Components/Proyects';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation ></Navigation>
        <Switch>
          <Route exact path="/" component={Employees} />
          <Route exact path="/proyects" component={Proyects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
