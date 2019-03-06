import React, { Component } from "react";
import { AppBar, Tabs, Tab, withWidth } from "@material-ui/core";
import { withContext } from "../../context";

class Footer extends Component {
  onIndexSelect = (e, index) => {
    const { onCategorySelect, muscles } = this.props;
    onCategorySelect(index === 0 ? "" : muscles[index - 1]);
  };

  getIndex = () => {
    const { category, muscles } = this.props;
    return category ? muscles.findIndex(group => group === category) + 1 : 0;
  };

  render() {
    const { muscles } = this.props;
    return (
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          onChange={this.onIndexSelect}
          textColor="secondary"
          value={this.getIndex}
          variant="scrollable"
        >
          <Tab label="All" />
          {muscles.map(muscleGroup => (
            <Tab key={muscleGroup} label={muscleGroup} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export default withContext(withWidth()(Footer));
