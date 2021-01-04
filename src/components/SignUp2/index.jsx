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

// vehicle_type: { type: String, required: false },
// vehicle_no: { type: Number, required: false },
// licenseDate: { type: Date, required: false },

const SignUp2 = (props) => {
  const styles = useStyles();
  const values = props.values;
  const handlerInputs = props.handlerInputs;
  return (
    <Container>
      <div>
        <p className={styles.header}>Sign up 2</p>
        <form>
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
              <InputLabel htmlFor="id_num">ID Number</InputLabel>
              <Input
                type="text"
                label="id_num"
                id="id_num"
                onChange={(e) => handlerInputs(e, "id_num")}
                value={values.id_num}
              />
            </FormControl>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="licenseImage">License Image</InputLabel>
              <Input
                type="text"
                label="licenseImage"
                id="licenseImage"
                onChange={(e) => handlerInputs(e, "licenseImage")}
                value={values.licenseImage}
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl className={styles.input_top}>
              <InputLabel htmlFor="vehicle_type">Vehicle Type</InputLabel>
              <Input
                type="text"
                label="vehicle_type"
                id="vehicle_type"
                onChange={(e) => handlerInputs(e, "vehicle_type")}
                value={values.vehicle_type}
              />
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="vehicle_no">Vehicle Number</InputLabel>
                <Input
                  type="text"
                  label="vehicle_no"
                  id="vehicle_no"
                  onChange={(e) => handlerInputs(e, "vehicle_no")}
                  value={values.expDate}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp2;
