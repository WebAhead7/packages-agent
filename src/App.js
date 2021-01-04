import React, { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";

import Navigation from "./navigation/Navigation";
import DrawerNav from "./navigation/Router";

function App(props) {
  const [nav, setNav] = useState(false);
  return (
    <div className="App">
      {/* <Header /> */}
      <DrawerNav nav={nav} setNav={setNav} />
    </div>
  );
}

export default App;
