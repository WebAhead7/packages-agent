import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getOwnerProfile } from "../../api/api";
import StoreHeader from "../../components/StoreHeader";

import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
  AppBar,
} from "@material-ui/core";
import useStyles from "./styles";
import Loader from "../../components/Loader";

import { getAllPackages } from "../../api/api";

const StoreScreen = (props) => {
  const {
    auth,
    setAuth,
    ownerInfo,
    setOwnerInfo,
    packages,
    setPackages,
  } = useContext(globalContext);

  // useEffect(() => {
  //   getAllPackages(setPackages, auth.token);
  // }, []);

  // if (ownerInfo.isLoading) return <Loader />;

  return (
    <>
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <StoreHeader />
        <div>Clients: 54</div>
        <div>Packages: 118</div>
      </Container>
    </>
  );
};

export default StoreScreen;
