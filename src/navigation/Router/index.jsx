import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { globalContext } from "../../context/context";
import { removeItemLocal } from "../../hooks/localStorage";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../../screens/Home";
import Package from "../../screens/Package";
import Login from "../../screens/Login";
import Profile from "../../screens/Profile";
import Register from "../../screens/Signup";
import AddPackage from "../../screens/AddPackage";
import AddBusiness from "../../screens/AddBusiness";
import Header from "../../components/Header";
import AddPackageButton from "../../components/AddPackageButton";

export const HomeRoute = "/";
export const PackageRoute = "/package";
export const LoginRoute = "/login";
export const ProfileRoute = "/profile";
export const RegisterRoute = "/register";
export const AddPackageRoute = "/addBackage";
export const AddBusinessRoute = "/add_business";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerNav(props) {
  const styles = useStyles();
  const [state, setState] = React.useState(false);
  const { drawer, setDrawer, auth, setAuth, setOwnerInfo } = useContext(
    globalContext
  );

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const logout = () => {
    removeItemLocal("accessToken");
    setAuth({
      isAuth: false,
      error: null,
      token: null,
      isLoading: false,
    });

    setOwnerInfo({
      isLoading: false,
      data: null,
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Header {...props} />
        <React.Fragment>
          <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
            <List>
              <Link
                to={HomeRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              {/* <Link
                to={PackageRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Package"} />
                </ListItem>
              </Link> */}

              <Link
                to={ProfileRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Profile"} />
                </ListItem>
              </Link>
              {/* <Link
                to={AddPackageRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Add Package"} />
                </ListItem>
              </Link>
              <Link
                to={AddBusinessRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Add Business"} />
                </ListItem>
              </Link> */}
              <ListItem
                button
                onClick={() => {
                  logout();
                  toggleDrawer();
                }}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </List>
          </Drawer>

          {!auth.isAuth ? (
            <>
              <Switch>
                <Route exact path={HomeRoute}>
                  <Login {...props} />
                </Route>
                <Route path={RegisterRoute}>
                  <Register />
                </Route>
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </>
          ) : (
            <>
              <Switch>
                <Route exact path={HomeRoute}>
                  <Home />
                </Route>
                <Route path={PackageRoute}>
                  <Package />
                </Route>
                <Route path={LoginRoute}>
                  <Login />
                </Route>
                <Route path={ProfileRoute}>
                  <Profile />
                </Route>
                <Route path={RegisterRoute}>
                  <Register />
                </Route>
                <Route path={AddPackageRoute}>
                  <AddPackage />
                </Route>
                <Route path={AddBusinessRoute}>
                  <AddBusiness />
                </Route>
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </>
          )}
        </React.Fragment>
      </Router>
    </div>
  );
}
