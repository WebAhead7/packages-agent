import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import { globalContext } from "../../context/context";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import useStyles from "./styles";
import PackageHeader from "../../components/PackageHeader";
import Loader from "../../components/Loader";
import PackageTabs from "../../components/PackageTabs";
import Links from "../../components/Links";
import Confirm from "../../components/Confirm";
import ButtonPackage from "../../components/ButtonPackage";
import PackageStatus from "../../components/PackageStatus";
import {
  getPackageStatus,
  getOnePackage,
  requestPackage,
  pickUp,
  confirmOwner,
  UpdateWaiting,
  confirmClient,
} from "../../api/api";

import PackageInfo from "../../components/PackageInfo";

const Package = (props) => {
  const [confirmation, setConfirmation] = useState("");
  const styles = useStyles();
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const forceUpdate = useForceUpdate();

  const {
    auth,
    setAuth,
    packages,
    currentPackage,
    setCurrentPackage,
  } = useContext(globalContext);

  const [refresh, setRefresh] = useState(null);

  const params = useParams();

  useEffect(() => {
    if (packages.data) {
      // const findPackage = (id) => {
      //   const curPackage = packages.data.find((p) => p._id === id);
      //   setCurrentPackage(curPackage);
      // };
      // findPackage(params.id);
    }
    getOnePackage(
      params.id,
      auth.token,
      setCurrentPackage,
      currentPackage,
      setStatus
    );

    return () => setRefresh(null);
  }, [refresh]);

  if (!currentPackage.data && !packages) return <Loader />;

  return (
    <Container className={styles.container}>
      {currentPackage.data && <PackageHeader data={currentPackage.data} />}

      {status && <PackageStatus status={status} />}

      {(status == "Pending" || status == "On transit") && (
        <PackageInfo data={currentPackage.data} />
      )}

      {(status == "Waiting for confirmation" ||
        status == "Waiting to be delivered") && (
        <Confirm
          setConfirmation={setConfirmation}
          confirmationCode={confirmation}
          message={message}
        />
      )}

      {/* {<Links />} */}

      {/* <Button
        color="primary"
        onClick={() => {
          requestPackage(
            currentPackage.data.businessId,
            currentPackage.data._id,
            auth.token,
            setRefresh
          );
        }}
      >
        Request package
      </Button> */}

      {status && currentPackage.data && (
        <ButtonPackage
          packageId={params.id}
          businessId={currentPackage.data.businessId}
          status={status}
          token={auth.token}
          confirmationCode={confirmation}
          setCurrentPackage={setCurrentPackage}
          currentPackage={currentPackage}
          setRefresh={setRefresh}
          setMessage={setMessage}
        />
      )}
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
