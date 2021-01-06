import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getAgentProfile } from "../../api/api";
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
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import SwitchToMap from "../../components/SwitchToMap";
import { getAllPackages } from "../../api/api";
import { getAllPackagesByRadius } from "../../api/api";

const Home = (props) => {
  const {
    auth,
    setAuth,
    agentInfo,
    setAgentInfo,
    packages,
    setPackages,
    myLocation,
    radius,
    setRadius
  } = useContext(globalContext);


  console.log(packages)

  useEffect(() => {
    if (!agentInfo.data) {
      getAgentProfile(setAgentInfo, auth.token);
    }
  }, []);

  if (agentInfo.isLoading) return <Loader />;

  return (
    <>
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Filter setRadius={setRadius} radius={radius} />

        {/* {packages && packages.data && <PackageList data={packages} />} */}
        <div
          style={{
            position: "sticky",
            right: 25,
            bottom: 25,
            alignSelf: "flex-end",
          }}
        >
          <SwitchToMap />
        </div>
      </Container>
    </>
  );
};

export default Home;
