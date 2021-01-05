import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import PackageItem from "../PackageItem";

const PackageList = (props) => {
  const styles = useStyles();
  const {
    data: { data },
  } = props;
  console.log("dsfsfsff")
  return (
    <div style={{ position: "relative" }}>
      {data &&
        data.map((item, index) => <PackageItem key={index} data={item} />)}
    </div>
  );
};

export default PackageList;
