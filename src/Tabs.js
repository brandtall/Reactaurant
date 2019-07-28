import React, { Component } from "react";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "react-tabs/style/react-tabs.css";
import "./index.css"

class Tabso extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="home" >
  <Tab eventKey="home" title="About" default>
    <About/>
  </Tab>
  <Tab eventKey="profile" title="Menu">
    <Menu/>
  </Tab>
  <Tab eventKey="contact" title="Contact">
    <Contact/>
  </Tab>
</Tabs>
    );
  }
}


export default Tabso
