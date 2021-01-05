import React from "react";
import { Container } from "@material-ui/core";
import { globalContext } from "../../context/context";
import useStyles from "./styles";
import PackageHeader from "../../components/PackageHeader";
import PackageTabs from "../../components/PackageTabs";
//import Links from "../../components/Links";
import Confirm from "../../components/Confirm";
import ButtonPackage from "../../components/ButtonPackage";

const Package = (props) => {
  const { agentInfo } = useContext(globalContext);

  const [value, setValue] = React.useState(2);

  const styles = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={styles.container}>
      <PackageHeader />
      {/* <PackageStatus /> */}

      {/* <PackageTabs /> */}
      <Confirm />
      {/* <Links /> */}
      <ButtonPackage text={"Request Package"} handleReq={console.log("11")} />
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
