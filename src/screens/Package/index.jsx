import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import { globalContext } from "../../context/context";
import useStyles from "./styles";
import PackageHeader from "../../components/PackageHeader";
import Loader from "../../components/Loader";
import PackageTabs from "../../components/PackageTabs";
//import Links from "../../components/Links";
import Confirm from "../../components/Confirm";
import ButtonPackage from "../../components/ButtonPackage";
import PackageStatus from "../../components/PackageStatus";
import { getPackageStatus } from "../../api/api";

const Package = (props) => {
  const styles = useStyles();
  const [status, setStatus] = useState(null);
  const [currentPackage, setCurrentPackage] = useState(null);
  const { auth, packages } = useContext(globalContext);
  const [value, setValue] = useState(2);
  //const params = useParams();
  const params = { id: 1 };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (packages.data) {
      const findPackage = (id) => {
        const curPackage = packages.data.find((p) => p._id === id);
        setCurrentPackage(curPackage);
      };

      findPackage(params.id);
    }
    getPackageStatus(auth.token, params.id, setStatus);
  }, []);

  if (!currentPackage && !packages) return <Loader />;

  return (
    <Container className={styles.container}>
      {/* <PackageStatus /> */}

      {/* <PackageTabs /> */}

      {/* <Links /> */}

      {/* {currentPackage && <PackageHeader data={currentPackage} />}
      {status && <PackageStatus status={status} />} */}
      <Confirm />
      <ButtonPackage
        data={packages}
        text={"Request Package"}
        handleReq={console.log("11")}
      />
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
