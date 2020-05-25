import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ReactNotification from "react-notifications-component";
import { ReactComponent as Logo } from "assets/noQ-logo.png";
import { Form, Card, CardBody, CardHeader, Navbar, Nav, Button, InputGroup, Label } from "reactstrap";

import NqRoute from "./routes.js";
import { LogInForm } from "store/LogInForm";

import NqNavBar from "store/NavBar";

function App() {
  return (
    
    <BrowserRouter>
      <ReactNotification/>
       <NqRoute />
      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;
