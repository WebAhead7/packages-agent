import React, { createContext, useState, useEffect } from "react";
import { setItemLocal, getItemLocal } from "../hooks/localStorage";

export const globalContext = createContext();
const get = "get";

const GlobalContextProvider = (props) => {
  const [filter, setFilter] = useState("all");
  const [drawer, setDrawer] = useState(false);
  const [packages, setPackages] = useState({
    isLoading: false,
    data: null,
  });
  const [ownerInfo, setOwnerInfo] = useState({
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
        filter,
        setFilter,
        drawer,
        setDrawer,
        auth,
        setAuth,
        setOwnerInfo,
        ownerInfo,
        packages,
        setPackages,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
