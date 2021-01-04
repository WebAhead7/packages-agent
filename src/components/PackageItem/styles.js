import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    background: "#C6DDFF",
    marginTop: 12,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  content: {
    display: "flex",
    flex: "1 0 auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cover: {
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "120%",
  },
  innerCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#969696",
    fontSize: 11,
  },
  mainTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default useStyles;
