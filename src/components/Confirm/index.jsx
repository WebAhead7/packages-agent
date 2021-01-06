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
  const { message, confirmationCode } = props;
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <p className={styles.header}>Confirmation Code</p>
      <TextField
        style={{ width: "100%" }}
        value={props.confirmationCode}
        onChange={(e) => props.setConfirmation(e.target.value)}
        id="filled-basic"
        label=""
        variant="filled"
        placeholder="**********"
      />

      {message && (
        <Typography variant="caption" style={{ color: "#727272" }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default Confirm;
