import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

const PackageDelivered = (props) => {
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <img src="/assets/images/delivered.png" style={{ width: "95%" }} />
      <h1 style={{ color: "#358411" }}>Rate: 4.5</h1>
      <h2 style={{ color: "#516852" }}>Well done !</h2>
    </div>
  );
};

export default PackageDelivered;
