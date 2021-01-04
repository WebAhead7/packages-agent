import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 12,
    width: "100%",
    padding: 10,
  },
});

export default useStyles;
