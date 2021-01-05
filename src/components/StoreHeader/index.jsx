import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";
import moment from "moment";

import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";

const StoreHeader = (props) => {
  // const { firstname, lastname, createdAt } = props.data.data;
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.header}>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="/assets/images/profile.png"
        />
        <Typography style={{ marginTop: 10 }} variant="h5">
          {/* {`${name}`} */}
          Store Name
        </Typography>
        <div className={styles.controls}>
          <div className={styles.innerControls}>
            <Typography variant="caption" style={{ color: "#727272" }}>
              Working hours
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
              {/* {moment(createdAt).format("LL")} */}
              09:00 - 18:00
            </Typography>
          </div>
          <div>
            <EditIcon
              fontSize="large"
              style={{ marginRight: 20, color: "#11890F" }}
            />
            <AddBoxIcon fontSize="large" style={{ color: "#FF0000" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
