import React from "react";
import { Tab, Tabs, Paper, TabPanel, AppBar } from "@material-ui/core";
import PackageTabPanel from "../PackageTabPanel";
import PackageInfo from "../PackageInfo";
import useStyles from "./styles";

const item = {
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

const client = {
  firstname: "Alaa",
  lastname: "Bashiyi",
  phone: "054000000",
  email: "alaa@gmail.com",
  address: "Haifa, 854",
};

const agent = {
  firstname: "Alaa",
  lastname: "Bashiyi",
  phone: "054000000",
};

const PackageTabs = () => {
  const [value, setValue] = React.useState(0);

  const styles = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%", marginTop: 20 }}>
      <Paper square>
        <AppBar position="static" className={styles.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
            variant="fullWidth"
          >
            <Tab label="Item" />
            <Tab label="Client" />
            <Tab label="Agent" />
          </Tabs>
        </AppBar>
        <PackageTabPanel value={value} index={0}>
          <PackageInfo fakedata={item} />
        </PackageTabPanel>
        <PackageTabPanel value={value} index={1}>
          <PackageInfo fakedata={client} />
        </PackageTabPanel>
        <PackageTabPanel value={value} index={2}>
          <PackageInfo fakedata={agent} />
        </PackageTabPanel>
      </Paper>
    </div>
  );
};

export default PackageTabs;
