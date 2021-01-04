import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    background: "#fff",
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
    width: "100%",
  },

  button: {
    marginTop: 50,
    width: "100%",
  },
});

export default useStyles;
