import React from "react";
import { Typography, Avatar, Container, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";

const StoreOverMap = (props) => {
  const {
    address: { name, phone, address },
  } = props.data;
  const styles = useStyles();

  return (
    <div
      style={{
        width: "100%",
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0)",
      }}
    >
      <div
        style={{
          width: "98%",
          background: "#fff",
          borderRadius: 7,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
            {name}
          </Typography>

          <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
            opens at 10:00
          </Typography>

          <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
            {phone}
          </Typography>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="caption" style={{ color: "#727272", flex: 1 }}>
            {address.city}
          </Typography>
          <Typography variant="caption" style={{ color: "#727272", flex: 1 }}>
            {address.street}
          </Typography>
          <Typography variant="caption" style={{ color: "#727272", flex: 1 }}>
            {address.specificAddress}
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            color="primary"
            variant="outlined"
            style={{ borderRadius: 15, margin: 5 }}
          >
            packages
          </Button>
          <Link to="storeview">
            <Button
              color="primary"
              variant="contained"
              style={{ borderRadius: 15, margin: 5 }}
            >
              NAVIGATE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreOverMap;
