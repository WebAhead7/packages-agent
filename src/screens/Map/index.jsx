import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getOwnerProfile } from "../../api/api";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
  AppBar,
} from "@material-ui/core";
import useStyles from "./styles";
import Loader from "../../components/Loader";
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import StoreIcon from "@material-ui/icons/Store";
import StoreOverMap from "../../components/StoreOverMap";

import { getAllPackages } from "../../api/api";

const data = [
  {
    addedAt: "10 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.867,
    longitude: 35.1818,
  },
  {
    addedAt: "13 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.867,
    longitude: 35.1818,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.867,
    longitude: 35.1818,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.867,
    longitude: 35.1819,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.8671,
    longitude: 35.1817,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.8673,
    longitude: 35.1815,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.867,
    longitude: 35.1818,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 32.827,
    longitude: 35.1876,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 32.8675,
    longitude: 35.1838,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 32.84703,
    longitude: 35.1811,
  },
];

const Map = (props) => {
  const {
    auth,
    setAuth,
    ownerInfo,
    setOwnerInfo,
    packages,
    setPackages,
    myLocation,
  } = useContext(globalContext);

  useEffect(() => {
    getAllPackages(setPackages, auth.token);
  }, []);

  const [viewport, setViewport] = useState({
    latitude: myLocation.coords.latitude,
    longitude: myLocation.coords.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
        // setRTLTextPlugin={true}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYWxhYWJhc2hpeWkiLCJhIjoiY2tqaXE0cmIwNGk2MDJzbnEydnA1bGNiaiJ9.Ifn9RWUyzZYUirLQTX6GUQ"
        }
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data.map((pack, index) => (
          <Marker
            key={index}
            latitude={pack.latitude}
            longitude={pack.longitude}
          >
            <button
              style={{
                borderRadius: 40,
                background: "#000",
                color: "#fff",
                width: 60,
                height: 60,
              }}
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPackage(pack);
                setViewport({
                  latitude: selectedPackage ? pack.latitude : 32.827,
                  longitude: selectedPackage ? pack.longitude : 35.1818,
                  width: "100vw",
                  height: "100vh",
                  zoom: 14,
                  transitionDuration: 300,
                });
              }}
            >
              <StoreIcon fontSize="large" />
            </button>
          </Marker>
        ))}

        {selectedPackage ? (
          <>
            <Popup
              latitude={selectedPackage.latitude}
              longitude={selectedPackage.longitude}
              onClose={() => {
                setSelectedPackage(null);
              }}
            >
              <div>
                <h4>Packages: 3</h4>
                <p>4 KM away</p>
              </div>
            </Popup>
          </>
        ) : null}
        {selectedPackage && <StoreOverMap />}
      </ReactMapGL>
    </>
  );
};

export default Map;
