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
});

export default useStyles;
