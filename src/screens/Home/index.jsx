import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getOwnerProfile } from "../../api/api";
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
import AddPackageButton from "../../components/AddPackageButton";
import AddStoreButton from "../../components/AddStoreButton";

import { getAllPackages } from "../../api/api";

const Home = (props) => {
  const {
    auth,
    setAuth,
    ownerInfo,
    setOwnerInfo,
    packages,
    setPackages,
  } = useContext(globalContext);

  useEffect(() => {
    console.log("test");
    getAllPackages(setPackages, auth.token);
  }, []);

  useEffect(() => {
    if (!ownerInfo.data) {
      getOwnerProfile(setOwnerInfo, auth.token);
    }
  }, []);

  if (ownerInfo.isLoading) return <Loader />;

  console.log(ownerInfo);

  return (
    <>
      <Container
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Filter />
        {ownerInfo.data && !ownerInfo.data.businessId && <AddStoreButton />}
        {packages && <PackageList data={packages} />}

        {ownerInfo.data && ownerInfo.data.businessId && (
          <div
            style={{
              position: "sticky",
              right: 25,
              bottom: 25,
              alignSelf: "flex-end",
            }}
          >
            <AddPackageButton />
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;
