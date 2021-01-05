import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { globalContext } from "../../context/context";
import useStyles from "./styles";
import StoreHeader from "../../components/StoreHeader";

const Store = (props) => {
  const styles = useStyles();
  // const { store } = useContext(globalContext);
  console.log("TEST IN HERE");
  return (
    <Container className={styles.container}>
      <StoreHeader />
    </Container>
  );
};

export default Store;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
