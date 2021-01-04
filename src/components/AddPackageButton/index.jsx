import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import { AddPackageRoute } from "../../navigation/Router";
import useStyles from "./styles";

const AddPackageButton = () => {
  const styles = useStyles();
  return (
    <Link to={AddPackageRoute}>
      <IconButton className={styles.addButton}>
        <Add className={styles.addIcon} />
      </IconButton>
    </Link>
  );
};

export default AddPackageButton;
