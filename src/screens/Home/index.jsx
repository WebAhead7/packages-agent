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
    setRadius,
  } = useContext(globalContext);

  const [myPackages, setMyPackages] = useState(null);
  const [switchOn, setSwitchOn] = useState(false);

  // useEffect(() => {
  //   getAllPackages(setPackages, auth.token);
  // }, [switchOn]);

  // useEffect(() => {
  //   if (packages.data) {
  //     const data = packages.data.filter((p) => p.status === "Pending");
  //     setMyPackages({
  //       isLoading: false,
  //       data: data,
  //     });
  //   }
  // }, [switchOn]);

  useEffect(() => {
    if (!agentInfo.data) {
      getAgentProfile(setAgentInfo, auth.token);
    }
  }, [switchOn]);

  if (agentInfo.isLoading) return <Loader />;

  return (
    <>
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* <Filter /> */}
        {/* <Filter setRadius={setRadius} radius={radius} /> */}
        <Button color="secondary" onClick={() => setSwitchOn((prev) => !prev)}>
          {switchOn ? "All" : "My packages"}
        </Button>

        {packages.data && packages.data.length !== 0 && (
          <PackageList data={packages} />
        )}

        {/* {packages.data && myPackages.data && !switchOn && (
          <PackageList data={myPackages} />
        )} */}

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
