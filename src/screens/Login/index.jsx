import React, { useState, useContext } from "react";
import { globalContext } from "../../context/context";
import Loader from "../../components/Loader";
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
  Backdrop,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { setItemLocal, getItemLocal } from "../../hooks/localStorage";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ownerLogin } from "../../hooks/useLogin";
const get = "get";

const Login = (props) => {
  const styles = useStyles();
  const { drawer, setDrawer, auth, setAuth, setOwnerInfo } = useContext(
    globalContext
  );

  const token = getItemLocal("accessToken");

  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (v) => {
    ownerLogin(v, setAuth, setOwnerInfo);
  };

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  if (token) return <Loader />;

  return (
    <Container>
      <div>
        <p className={styles.header}>Login</p>
        <form>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              label="Email"
              id="email"
              onChange={(e) => handlerInputs(e, "email")}
              value={values.email}
            />
          </FormControl>
          <FormControl style={{ width: "100%", marginTop: 15 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={"password"}
              value={values.password}
              onChange={(e) => handlerInputs(e, "password")}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 50, width: "100%" }}
          onClick={() => handleLogin(values)}
        >
          Login
        </Button>
      </div>
      <div className={styles.signup}>
        <Typography variant="caption">
          If you don’t have an account, please register.
        </Typography>
        <Button
          as={Link}
          to="/register"
          variant="outlined"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Signup
        </Button>
        <Link to="/register" style={{ marginTop: 20 }}>
          Signup
        </Link>
      </div>
    </Container>
  );
};

export default Login;
