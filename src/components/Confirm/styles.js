import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 7,
    width: "100%",
    boxShadow: "1px 1px 25px #9E9E9E",
    borderWidth: 1,
    borderColor: "#9E9E9E",
    background: "#EEEEEE",
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
