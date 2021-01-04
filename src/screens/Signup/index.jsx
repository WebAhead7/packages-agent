import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { useHistory } from "react-router-dom";

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
  Divider,
} from "@material-ui/core";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "./styles";
import { signUpApi } from "../../api/api";

const Signup = () => {
  const styles = useStyles();
  const history = useHistory();
  const { drawer, setDrawer, auth, setAuth, setOwnerInfo } = useContext(
    globalContext
  );
  // const [isRegister, setIsRegister]

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    mobile: "",
    email: "",
    password: "",
    confirm: "",
    idImage: "",
    idNumber: "",

    city: "",
    street: "",
    building: "",
    apartment: "",
    specificAddress: "",
    longitude: "00",
    latitude: "00",

    creditNo: "",
    expDate: "",
    cvv: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const handleRegister = (v) => {
    const data = {
      firstname: v.firstname,
      lastname: v.lastname,
      phone: v.phone,
      mobile: v.mobile,
      email: v.email,
      password: v.password,
      confirm: v.confirm,
      idImage: v.idImage,
      idNumber: v.idNumber,
      address: {
        city: v.city,
        street: v.street,
        building: v.building,
        apartment: v.apartment,
        specificAddress: v.specificAddress,
        longitude: v.longitude,
        latitude: v.latitude,
      },
      payment: {
        idNumber: v.idNumber,
        creditNo: v.creditNo,
        expDate: v.expDate,
        cvv: v.cvv,
      },
    };

    signUpApi(setAuth, data);
  };

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  }, [auth]);

  return (
    <Container>
      <div>
        <p className={styles.header}>Sign up</p>
        <form>
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="fname">First Name</InputLabel>
              <Input
                label="fname"
                id="fname"
                onChange={(e) => handlerInputs(e, "firstname")}
                value={values.firstname}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="lname">Last Name</InputLabel>
              <Input
                label="lname"
                id="lname"
                onChange={(e) => handlerInputs(e, "lastname")}
                value={values.lastname}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="phone">Phone number</InputLabel>
              <Input
                label="phone"
                id="phone"
                onChange={(e) => handlerInputs(e, "phone")}
                value={values.phone}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="mobile">Mobile number</InputLabel>
              <Input
                label="mobile"
                id="mobile"
                onChange={(e) => handlerInputs(e, "mobile")}
                value={values.mobile}
              />
            </FormControl>
          </Grid>
          <Divider />
          <Grid>
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
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={"password"}
                value={values.password}
                onChange={(e) => handlerInputs(e, "password")}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="confirm">Confirm Password</InputLabel>
              <Input
                id="confirm"
                type="password"
                value={values.confirm}
                onChange={(e) => handlerInputs(e, "confirm")}
              />
            </FormControl>
          </Grid>
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
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="specificAddress">
                Specific address
              </InputLabel>
              <Input
                type="text"
                label="specificAddress"
                id="specificAddress"
                onChange={(e) => handlerInputs(e, "specificAddress")}
                value={values.specificAddress}
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="idImage">ID Image</InputLabel>
              <Input
                type="text"
                label="idImage"
                id="idImage"
                onChange={(e) => handlerInputs(e, "idImage")}
                value={values.idImage}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="idNumber">ID Number</InputLabel>
              <Input
                type="text"
                label="idNumber"
                id="idNumber"
                onChange={(e) => handlerInputs(e, "idNumber")}
                value={values.idNumber}
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="creditNo">Credit card number</InputLabel>
              <Input
                type="credit"
                label="creditNo"
                id="creditNo"
                onChange={(e) => handlerInputs(e, "creditNo")}
                value={values.creditNo}
              />
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="expDate">Experation date</InputLabel>
                <Input
                  type="text"
                  label="expDate"
                  id="expDate"
                  onChange={(e) => handlerInputs(e, "expDate")}
                  value={values.expDate}
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="cvv">CVV</InputLabel>
                <Input
                  type="text"
                  label="cvv"
                  id="cvv"
                  onChange={(e) => handlerInputs(e, "cvv")}
                  value={values.cvv}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => handleRegister(values)}
        >
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default Signup;
