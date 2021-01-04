import React from "react";
import { Tab, Tabs, Paper, TabPanel } from "@material-ui/core";
import useStyles from "./styles";

const fakedata = {
  name: "Laptop",
  id: "SDF564S",
  mid: "48455S",
  weight: "1250 g",
  delivery_price: 25,
  quantity: 1,
  status: "Pending",
  tracking_number: "IRA845S6ASD",
  shop_address: "Haifa, 854",
};

const PackageInfo = (props) => {
  const styles = useStyles();
  const { fakedata } = props;

  return (
    <div style={{ width: "100%" }}>
      {Object.keys(fakedata).map((key, index) => (
        <div className={styles.item} key={index}>
          {key}: {fakedata[key]}
        </div>
      ))}
    </div>
  );
};

export default PackageInfo;
