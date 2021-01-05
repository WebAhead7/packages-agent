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
  button: {
    marginTop: 50,
    width: "80%",
  },
  input: {
    marginTop: 50,
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    alignContent: "center",
  },
});

export default useStyles;
