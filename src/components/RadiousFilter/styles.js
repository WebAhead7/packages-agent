import { makeStyles } from "@material-ui/core/styles";

const useStyles_type = makeStyles({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 20,
  },
});

const useStyles_radius = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const useStyles_cost = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export { useStyles_type, useStyles_radius, useStyles_cost };
