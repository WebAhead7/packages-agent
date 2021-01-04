import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  signup: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
    marginTop: 50,
  },

  input_top: {
    marginTop: 15,
    width: "90%",
  },

  add_button: {
    padding: 10,
    marginTop: 30,
    width: "60%",
  },
  button: {
    marginTop: 50,
    width: "100%",
  },
});

export default useStyles;
