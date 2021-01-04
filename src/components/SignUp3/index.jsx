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

const SignUp3 = (props) => {
  const styles = useStyles();
  const values = props.values;
  const handlerInputs = props.handlerInputs;

  return (
    <Container>
      <div>
        <p className={styles.header}>Sign up 3</p>
        <form>
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="bank_name">Bank Name</InputLabel>
              <Input
                label="bank_name"
                id="bank_name"
                onChange={(e) => handlerInputs(e, "bank_name")}
                value={values.bank_name}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="bank_no">Bank Number</InputLabel>
              <Input
                label="bank_no"
                id="bank_no"
                onChange={(e) => handlerInputs(e, "bank_no")}
                value={values.bank_no}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="account_no">Account Number</InputLabel>
              <Input
                label="account_no"
                id="account_no"
                onChange={(e) => handlerInputs(e, "account_no")}
                value={values.account_no}
              />
            </FormControl>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp3;
