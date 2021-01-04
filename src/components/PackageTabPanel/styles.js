import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 120,
    height: 120,
  },
  controls: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  innerControls: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default useStyles;
