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

const Home = (props) => {
  const {
    auth,
    setAuth,
    agentInfo,
    setAgentInfo,
    packages,
    setPackages,
  } = useContext(globalContext);

  useEffect(() => {
    getAllPackages(setPackages, auth.token);
  }, []);

  useEffect(() => {
    if (!agentInfo.data) {
      getAgentProfile(setAgentInfo, auth.token);
    }
  }, []);
  console.log(ownerInfo);

  if (agentInfo.isLoading) return <Loader />;

  return (
    <>
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Filter />


        {packages && <PackageList data={packages} />}
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
