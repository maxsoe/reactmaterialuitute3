import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

// export default withWidth()(({ muscles, category, onSelect }) => {
//   const index = category
//     ? muscles.findIndex(group => group === category) + 1
//     : 0;
//
//   const onIndexSelect = (e, index) =>
//     onSelect(index === 0 ? "" : muscles[index - 1]);
//
//   return (
//     <Paper>
//       <Tabs
//         indicatorColor="primary"
//         onChange={onIndexSelect}
//         textColor="primary"
//         value={index}
//         variant="scrollable"
//       >
//         <Tab label="All" />
//         {muscles.map(muscleGroup => (
//           <Tab key={muscleGroup} label={muscleGroup} />
//         ))}
//       </Tabs>
//     </Paper>
//   );
// });

const Footer = ({ muscles, category, onSelect, width }) => {
  console.log(width);
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <AppBar position="static">
      <Tabs
        indicatorColor="secondary"
        onChange={onIndexSelect}
        textColor="secondary"
        value={index}
        variant="scrollable"
      >
        <Tab label="All" />
        {muscles.map(muscleGroup => (
          <Tab key={muscleGroup} label={muscleGroup} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(Footer);
