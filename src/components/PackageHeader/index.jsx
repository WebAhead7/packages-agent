import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const PackageHeader = () => {
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.header}>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="/assets/images/package.png"
        />
        <Typography style={{ marginTop: 10 }} variant="h5">
          Package name
        </Typography>
        <div className={styles.controls}>
          <div className={styles.innerControls}>
            <Typography variant="caption" style={{ color: "#727272" }}>
              Created at:
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
              October 18, 2020
            </Typography>
          </div>
          <div>
            <EditIcon
              fontSize="large"
              style={{ marginRight: 20, color: "#11890F" }}
            />
            <DeleteForeverIcon fontSize="large" style={{ color: "#FF0000" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageHeader;
