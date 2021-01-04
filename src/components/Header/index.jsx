import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { globalContext } from "../../context/context";
import { Typography, AppBar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useStyles from "./styles";

import {
  HomeRoute,
  PackageRoute,
  LoginRoute,
  ProfileRoute,
  RegisterRoute,
  AddPackageRoute,
  AddBusinessRoute,
} from "../../navigation/Router";

const Header = (props) => {
  const location = useLocation();
  const routes = [
    PackageRoute,
    ProfileRoute,
    RegisterRoute,
    AddPackageRoute,
    AddBusinessRoute,
  ];

  const isBack = (r) => routes.some((route) => route === r);

  let history = useHistory();

  const { drawer, setDrawer, auth, ownerInfo } = useContext(globalContext);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleGoBack = () => history.goBack();
  const styles = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <AppBar
        position="static"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",

          flexDirection: "row-reverse",
        }}
      >
        {auth.isAuth && !isBack(location.pathname) ? (
          <Button style={{ alignSelf: "flex-end" }} onClick={handleDrawer}>
            <MenuIcon fontSize="large" />
          </Button>
        ) : (
          <Button onClick={handleGoBack}>
            <ArrowBackIosIcon fontSize="large" />
          </Button>
        )}

        {!auth.isAuth && isBack(location.pathname) && (
          <Button onClick={handleGoBack}>
            <ArrowBackIosIcon fontSize="large" />
          </Button>
        )}
        <div style={{ alignSelf: "flex-start" }}>
          {ownerInfo && ownerInfo.data && (
            <h4>
              {ownerInfo.data.firstname} {ownerInfo.data.lastname}
            </h4>
          )}
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
