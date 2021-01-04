import React from "react";
import { Tab, Tabs, Paper, TabPanel } from "@material-ui/core";
import useStyles from "./styles";

const PackageTabPanel = (props) => {
  const styles = useStyles();
  const { children, value, index } = props;
  return <div>{value === index && children}</div>;
};

export default PackageTabPanel;
