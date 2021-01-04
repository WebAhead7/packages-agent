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

const SignUp1 = (props) => {
  const values = props.values;
  const handlerInputs = props.handlerInputs;
  const styles = useStyles();
  return (
    <Container>
      <div>
        <p className={styles.header}>Sign up 1</p>
        <form>
          <Grid>
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
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="phone">Phone number</InputLabel>
              <Input
                label="phone"
                id="phone"
                onChange={(e) => handlerInputs(e, "phone")}
                value={values.phone}
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
        </form>
      </div>
    </Container>
  );
};

export default SignUp1;
