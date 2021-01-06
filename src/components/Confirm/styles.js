import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    borderWidth: 1,
    borderColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  button: {
    marginTop: 50,
    width: "100%",
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
