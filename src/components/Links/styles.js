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
    width: "100%",
  },
});

export default useStyles;
