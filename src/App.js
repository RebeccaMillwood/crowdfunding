import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorNotFound from "./components/ErrorNotFound/ErrorNotFound";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateProject from "./pages/CreateProject";
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

        <Route path="/create-project">
          <CreateProject />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="" component={ErrorNotFound} /> 

      </Switch>
      </div>
    </Router>
  )
}

export default App;
