import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavbarComponent from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import Analytics from './Pages/Analytics'
import Report from './Pages/Report'

function App() {
  return (
    <div >
      <div style={{ fontSize: "large", color: "black" }}>
        <NavbarComponent />
      </div>
      <Router>
        <Switch>
          <Route>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Dashboard} />
            <Route exact path={process.env.PUBLIC_URL + "/Analytics"} component={Analytics} />
            <Route exact path={process.env.PUBLIC_URL + "/Report"} component={Report} />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
