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
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./styles";
import { addBusiness } from "../../api/api";

const categories = [
  {
    value: "food",
    label: "Food",
  },
  {
    value: "sport",
    label: "Sport",
  },
];

const AddBusiness = () => {
  const styles = useStyles();

  const history = useHistory();

  const { auth, setAuth } = useContext(globalContext);
  const [isBusiness, setIsBusiness] = useState(false);

  const [values, setValues] = useState({
    name: "",
    storeId: "",
    category: "food",
    email: "",
    phone: "",
    mobile: "",

    city: "",
    street: "",
    building: "",
    apartment: "",
    specificAddress: "",
    longitude: "00",
    latitude: "00",

    about: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const createStore = (v) => {
    const data = {
      name: v.name,
      storeId: v.storeId,
      category: v.category,
      email: v.email,
      phone: v.phone,
      mobile: v.mobile,
      address: {
        city: v.city,
        street: v.street,
        building: v.building,
        apartment: v.apartment,
        specificAddress: v.specificAddress,
        longitude: v.longitude,
        latitude: v.latitude,
      },
      about: v.about,
    };

    addBusiness(data, auth.token, setAuth, setIsBusiness);
  };

  useEffect(() => {
    if (isBusiness) {
      history.push("/");
    }
  }, [isBusiness]);

  return (
    <Container>
      <div>
        <p className={styles.header}>Add Your Business</p>
        <form>
          <Grid>
            <FormControl className={styles.input_top}>
              <TextField
                className={styles.input_top}
                id="category"
                select
                label="Category"
                value={values.category}
                onChange={(e) => {
                  handlerInputs(e, "category");
                  console.log(e.target.value);
                }}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your category"
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="name">Shop Name</InputLabel>
              <Input
                label="name"
                id="name"
                onChange={(e) => handlerInputs(e, "name")}
                value={values.name}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="storeId">Store ID</InputLabel>
              <Input
                label="storeId"
                id="storeId"
                onChange={(e) => handlerInputs(e, "storeId")}
                value={values.storeId}
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
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                label="email"
                id="email"
                onChange={(e) => handlerInputs(e, "email")}
                value={values.email}
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
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="about">About the shop</InputLabel>
                <Input
                  label="about"
                  id="about"
                  onChange={(e) => handlerInputs(e, "about")}
                  value={values.about}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>

        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => {
            createStore(values);
          }}
        >
          Finish
        </Button>
      </div>
    </Container>
  );
};

export default AddBusiness;
