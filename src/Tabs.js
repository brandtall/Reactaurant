import React, { Component } from "react";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./index.css"

class Tabso extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Menu</Tab>
          <Tab>Contact Us</Tab>
        </TabList>

        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Menu />
        </TabPanel>
        <TabPanel>
            <Contact />
        </TabPanel>
      </Tabs>
    );
  }
}


export default Tabso
