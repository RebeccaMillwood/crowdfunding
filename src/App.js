import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <Nav />

      <Switch>
        <Route path="/projects/:id">
          <ProjectPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
