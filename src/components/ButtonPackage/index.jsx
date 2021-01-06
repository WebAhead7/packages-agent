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
import {
  requestPackage,
  pickUp,
  confirmOwner,
  UpdateWaiting,
  confirmClient,
  getOnePackage,
} from "../../api/api";
import { useHistory } from "react-router-dom";

const ButtonPackage = (props) => {
  const { setCurrentPackage, currentPackage, packageId, token, status } = props;

  const history = useHistory();

  const navigateBack = () => {
    history.push("/");
  };

  const flag = false;
  const statusFunctions = {
    Pending: {
      function: () => {
        requestPackage(props);
      },
      content: "Request Pacakge",
    },
    "In proccess": {
      function: () => pickUp(props),
      content: "Pick Up Pacakge",
    },
    "Waiting to be delivered": {
      function: () => confirmOwner(props),
      content: "Confirm",
    },
    "On transit": {
      function: () => UpdateWaiting(props),
      content: "Arrived",
    },
    "Waiting for confirmation": {
      function: () => confirmClient(props),
      content: "Confirm",
    },
    Delivered: {
      function: () => navigateBack(),
      content: "Done",
    },
  };

  // let content;

  // switch (r) {
  //   case Pending:
  //     content = 'Request it'
  //     break;

  //   default:
  //     break;
  // }

  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => {
            statusFunctions[status].function();
          }}
        >
          {statusFunctions[status].content}
        </Button>
      </div>
    </Container>
  );
};

export default ButtonPackage;
