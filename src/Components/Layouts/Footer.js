import React from "react";
import { AppBar, Tabs, Tab, withWidth } from "@material-ui/core";

import { withContext } from "../../context";

const Footer = props => {
  const { category, muscles, width, onCategorySelect } = props;

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onCategorySelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        //centered={width == "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab key={group} label={group} wrapped />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withContext(withWidth()(Footer));
