import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import { globalContext } from "./context/context";
import { getAllPackages } from "./api/api";

import Navigation from "./navigation/Navigation";
import DrawerNav from "./navigation/Router";
import Package from "./screens/Package";

export const getMyLocation = (cb) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      cb(position);
    },
    (error) => {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
};

function App(props) {
  const [nav, setNav] = useState(false);
  const { auth, setPackages, myLocation, setMyLocation } = useContext(
    globalContext
  );



  useEffect(() => {
    getMyLocation((location) => {
      setMyLocation(location)
    });
  }, []);

  useEffect(() => {
    getAllPackages(setPackages, auth.token);
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}

      {/* <Package /> */}
      <DrawerNav nav={nav} setNav={setNav} />
    </div>
  );
}

export default App;
