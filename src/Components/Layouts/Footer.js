import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {muscles.map(muscleGroup => (
        <Tab label={muscleGroup} />
      ))}
    </Tabs>
  </Paper>
);

export default Footer;
