import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import MapIcon from "@material-ui/icons/Map";
import { MapViewRoute } from "../../navigation/Router";
import useStyles from "./styles";

const SwitchToMap = () => {
  const styles = useStyles();
  return (
    <Link to={MapViewRoute}>
      <IconButton className={styles.addButton}>
        <MapIcon className={styles.addIcon} />
      </IconButton>
    </Link>
  );
};

export default SwitchToMap;
