import React from "react";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add, Storefront } from "@material-ui/icons";
// import StorefrontIcon from '@material-ui/icons/Storefront';
import Icon from "@material-ui/core/Icon";
import { AddBusinessRoute } from "../../navigation/Router";
import useStyles from "./styles";

const AddStoreButton = () => {
  const styles = useStyles();
  return (
    <Link
      to={AddBusinessRoute}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton className={styles.addButton}>
        <Storefront className={styles.addIcon} />
      </IconButton>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Add Store
      </Typography>
    </Link>
  );
};

export default AddStoreButton;
