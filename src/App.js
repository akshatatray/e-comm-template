import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
