import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";

import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";

const ProfileInfo = (props) => {
  const { email, phone, mobile } = props.data.data;
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Email address
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
        {email}
      </Typography>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Phone number
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
        {phone}
      </Typography>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Mobile number
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
        {mobile}
      </Typography>
    </div>
  );
};

export default ProfileInfo;
