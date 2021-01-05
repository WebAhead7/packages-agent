import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import SignUp1 from "../../components/SignUp1";
import SignUp2 from "../../components/SignUp2";
import SignUp3 from "../../components/SignUp3";

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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
  const [flag, setFlag] = useState({ flag1: true, flag2: false, flag3: false });

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
    licenseImage: "",
    id_num: "",
    city: "",
    street: "",
    building: "",
    apartment: "",
    specificAddress: "",
    longitude: "00",
    latitude: "00",

    vehicle_type: "",
    vehicle_no: "",
    bank_name: "",
    bank_no: "",
    account_no: "",
    monthly_paychecks: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const handleRegister = (v) => {
    const data = {
      firstname: v.firstname,
      lastname: v.lastname,
      phone: v.phone,
      email: v.email,
      password: v.password,
      confirm: v.confirm,
      id_num: v.id_num,
      licenseImage: v.licenseImage,

      address: {
        city: v.city,
        street: v.street,
        building: v.building,
        apartment: v.apartment,
        specificAddress: v.specificAddress,
        longitude: v.longitude,
        latitude: v.latitude,
      },
      bank: {
        id_num: v.id_num,
        bank_name: v.bank_name,
        account_no: v.account_no,
        bank_no: v.bank_no,
      },
    };

    signUpApi(setAuth, data);
    //setFlag({ flag1: true, flag2: false, flag3: false });
  };

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  }, [auth]);

  return (
    <Container>
      <div>
        {flag.flag1 && (
          <div>
            <SignUp1 values={values} handlerInputs={handlerInputs} />
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              onClick={() => {
                setFlag({ flag1: false, flag2: true, flag3: false });
              }}
            >
              Next
            </Button>
          </div>
        )}
        {flag.flag2 && (
          <div>
            <SignUp2 values={values} handlerInputs={handlerInputs} />

            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              onClick={() => {
                setFlag({ flag1: false, flag2: false, flag3: true });
              }}
            >
              Next
            </Button>
            <IconButton
              style={{ marginTop: 20 }}
              onClick={() => {
                setFlag({ flag1: true, flag2: false, flag3: false });
              }}
            >
              <ArrowBackIcon
                style={{ color: "#000", fontSize: 40, fontWeight: "bold" }}
              />
            </IconButton>
          </div>
        )}
        {flag.flag3 && (
          <div>
            <SignUp3 values={values} handlerInputs={handlerInputs} />

            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              onClick={() => {
                handleRegister(values);
              }}
            >
              Finish
            </Button>
            <IconButton
              style={{ marginTop: 20 }}
              onClick={() => {
                setFlag({ flag1: false, flag2: true, flag3: false });
              }}
            >
              <ArrowBackIcon
                style={{ color: "#000", fontSize: 40, fontWeight: "bold" }}
              />
            </IconButton>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Signup;
