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
  input_top: {
    marginTop: 15,
    width: "100%",
  },
  button: {
    marginTop: 50,
    width: "100%",
  },

  title: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bolder",
  },
});

export default useStyles;
