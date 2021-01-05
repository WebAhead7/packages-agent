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
import useStyles from "./styles";

const Confirm = (props) => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <div className={styles.input}>
        <p className={styles.header}>Confirmation Code</p>
        <TextField
          value={props.confirmationCode}
          onChange={(e) => props.setConfirmation(e.target.value)}
          id="filled-basic"
          label=""
          variant="filled"
          placeholder="**********"
        />
      </div>
    </Container>
  );
};

export default Confirm;
