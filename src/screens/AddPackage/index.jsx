import React, { useState, useContext } from "react";
import { addPackage } from "../../api/api";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Container,
} from "@material-ui/core";
import { globalContext } from "../../context/context";
import OverlayModal from "../../components/OverlayModal";
import AddClient from "../AddClient";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles";

const AddPackage = () => {
  const styles = useStyles();
  const { auth, setAuth } = useContext(globalContext);
  const [values, setValues] = useState({
    name: "",
    mid: "",
    weight: "",
    price: "",
    quantity: "",
    location: "",
    track_number: "IL9125456HAIFA",
    client: "5ff237a56a11e95bfcc95f93",
    clientId: "5ff237a56a11e95bfcc95f93",
  });
  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePackage = (v) => {
    const data = {
      name: v.name,
      mid: v.mid,
      weight: v.weight,
      delivery_price: v.price,
      quantity: v.quantity,
      location: v.location,
      track_number: v.track_number,
      client: v.client,
      clientId: v.clientId,
    };

    addPackage(data, auth.token);
  };

  return (
    <Container>
      <div>
        <p className={styles.header}>Add Backage</p>
        <form>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="name">Package Name</InputLabel>
            <Input
              label="name"
              id="name"
              onChange={(e) => handlerInputs(e, "name")}
              value={values.name}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="mid">Package ID</InputLabel>
            <Input
              label="mid"
              id="mid"
              onChange={(e) => handlerInputs(e, "mid")}
              value={values.mid}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="weight">Weight</InputLabel>
            <Input
              label="weight"
              id="weight"
              onChange={(e) => handlerInputs(e, "weight")}
              value={values.weight}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="price">Delivery Price</InputLabel>
            <Input
              label="price"
              id="price"
              onChange={(e) => handlerInputs(e, "price")}
              value={values.price}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input
              label="quantity"
              id="quantity"
              type="number"
              onChange={(e) => handlerInputs(e, "quantity")}
              value={values.quantity}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          className={styles.add_button}
        >
          Choose Client
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          className={styles.add_button}
          onClick={handleOpen}
        >
          Add Client
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => handlePackage(values)}
        >
          Finish
        </Button>
      </div>
      <OverlayModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      >
        <AddClient token={auth.token} handleClose={handleClose} />
      </OverlayModal>
    </Container>
  );
};

export default AddPackage;
