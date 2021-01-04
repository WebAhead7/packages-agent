import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import PackageHeader from "../../components/PackageHeader";
import PackageTabs from "../../components/PackageTabs";

const Package = (props) => {
  const [value, setValue] = React.useState(2);

  const styles = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={styles.container}>
      <PackageHeader />
      <PackageTabs />
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
