import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <Nav />
    <Router>
      <div>
      <Switch>
        <Route path="/" exact component={Books} />
        <Redirect from="/book" to="/" />
        <
      </Switch>      
      </div>
    </Router>
    <Books />
  </div>
  
);

export default App;
