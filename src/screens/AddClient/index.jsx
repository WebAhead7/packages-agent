import React, { useState } from "react";
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
// import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { addClient } from "../../api/api";
import useStyles from "./styles";

const AddClient = (props) => {
  const { token, handleClose } = props;
  const styles = useStyles();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",

    city: "",
    street: "",
    building: "",
    apartment: "",
    specificAddress: "",
    longitude: "00",
    latitude: "00",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const handleClient = (v) => {
    const data = {
      firstname: v.firstname,
      lastname: v.lastname,
      email: v.email,
      phone: v.phone,
      address: {
        city: v.city,
        street: v.street,
        building: v.building,
        apartment: v.apartment,
        specificAddress: v.specificAddress,
        longitude: v.longitude,
        latitude: v.latitude,
      },
    };

    addClient(data, token, handleClose);
  };

  return (
    <Container style={{ background: "#fff", width: "90%" }}>
      <div>
        <p className={styles.header}>Add New Client</p>

        <form>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input
              label="firstname"
              id="firstname"
              onChange={(e) => handlerInputs(e, "firstname")}
              value={values.firstname}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input
              label="lastname"
              id="lastname"
              onChange={(e) => handlerInputs(e, "lastname")}
              value={values.lastname}
            />
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="city">City</InputLabel>
                <Input
                  type="text"
                  label="city"
                  id="city"
                  onChange={(e) => handlerInputs(e, "city")}
                  value={values.city}
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="street">Street</InputLabel>
                <Input
                  type="text"
                  label="street"
                  id="street"
                  onChange={(e) => handlerInputs(e, "street")}
                  value={values.street}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="address">Building</InputLabel>
                <Input
                  type="text"
                  label="building"
                  id="building"
                  onChange={(e) => handlerInputs(e, "building")}
                  value={values.building}
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="apartment">Apartment</InputLabel>
                <Input
                  type="text"
                  label="apartment"
                  id="apartment"
                  onChange={(e) => handlerInputs(e, "apartment")}
                  value={values.apartment}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="specificAddress">Specific Address</InputLabel>
            <Input
              type="specificAddress"
              label="specificAddress"
              id="specificAddress"
              onChange={(e) => handlerInputs(e, "specificAddress")}
              value={values.specificAddress}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              label="Email"
              id="email"
              onChange={(e) => handlerInputs(e, "email")}
              value={values.email}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              type="text"
              value={values.phone}
              onChange={(e) => handlerInputs(e, "phone")}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => handleClient(values)}
        >
          Finish
        </Button>
      </div>
    </Container>
  );
};

export default AddClient;
