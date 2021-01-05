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
import { requestPackage, pickUp, confirmOwner, UpdateWaiting, confirmClient } from "../../api/api"

const ButtonPackage = (props) => {
  const flag = false;
  const statusFunctions = {
    "Pending": {
      function: () => requestPackage(props),
      content: "Request Pacakge"
    },
    "In proccess": {
      function: () => pickUp(props),
      content: "Pick Up Pacakge"
    },
    "Waiting to be delivered": {
      function: () => confirmOwner(props),
      content: "Confirm"
    },
    "On transit": {
      function: () => UpdateWaiting(props),
      content: "Arrived"
    },
    "Waiting for confirmation": {
      function: () => confirmClient(props),
      content: "Confirm"
    },
    "Delivered": {
      function: 3,
      content: "Done"
    },
  }
  const styles = useStyles();

  return (
    <Container calssName={styles.container}>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => {
            statusFunctions.status.function();
          }}
        >
          {statusFunctions.status.content}
        </Button>
      </div>
    </Container>
  );
};

export default ButtonPackage;
