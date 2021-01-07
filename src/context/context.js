import React, { createContext, useState, useEffect } from "react";
import { setItemLocal, getItemLocal } from "../hooks/localStorage";

export const globalContext = createContext();
const get = "get";

const GlobalContextProvider = (props) => {
  const [type, setType] = useState("all");
  const [radius, setRadius] = useState(1);
  const [cost, setCost] = useState(1);
  const [drawer, setDrawer] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({
    isLoading: false,
    isUpdating: false,
    data: null,
    error: null,
  });
  const [myLocation, setMyLocation] = useState({
    latitude: "32.867077099999996",
    longitude: "35.1818587",
  });
  const [packages, setPackages] = useState({
    isLoading: false,
    data: null,
  });
  const [agentInfo, setAgentInfo] = useState({
    isLoading: false,
    data: null,
  });
  const token = getItemLocal("accessToken");
  const [auth, setAuth] = useState({
    isAuth: false,
    error: null,
    token: null,
    isLoading: false,
  });
  useEffect(() => {
    if (auth.token === null && token !== null) {
      setAuth({ isAuth: true, error: null, token: token, isLoading: false });
    }
  }, []);

  return (
    <globalContext.Provider
      value={{
        type,
        setType,
        radius,
        setRadius,
        cost,
        setCost,
        drawer,
        setDrawer,
        auth,
        setAuth,
        setAgentInfo,
        agentInfo,
        packages,
        setPackages,
        myLocation,
        setMyLocation,
        currentPackage,
        setCurrentPackage,
        radius,
        setRadius,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
