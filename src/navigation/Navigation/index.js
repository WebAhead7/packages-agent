import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../../screens/Home";
import Package from "../../screens/Package";
import Login from "../../screens/Login";
export const HomeRoute = "/";
export const ProfileRoute = "/profile";
export const LoginRoute = "/login";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function RouterTab() {
  const styles = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={styles.root}
    >
      <BottomNavigationAction label="Home" value="home" icon={<Home />} />

      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
