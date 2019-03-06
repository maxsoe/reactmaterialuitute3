import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { withContext } from "../../context";

class Footer extends Component {
  muscles = this.getMuscles();

  getMuscles() {
    return ["", ...this.props.muscles];
  }

  onIndexSelect = (e, index) => {
    this.props.onCategorySelect(this.muscles[index]);
  };

  getIndex = () => {
    return this.muscles.indexOf(this.props.category);
  };

  render() {
    return (
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          onChange={this.onIndexSelect}
          textColor="secondary"
          value={this.getIndex()}
          variant="scrollable"
        >
          {this.muscles.map(muscleGroup => (
            <Tab key={muscleGroup} label={muscleGroup || "All"} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export default withContext(Footer);
