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

const ButtonPackage = (props) => {
  const styles = useStyles();

  return (
    <Container calssName={styles.container}>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => {
            props.handleReq();
          }}
        >
          {props.text}
        </Button>
      </div>
    </Container>
  );
};

export default ButtonPackage;
