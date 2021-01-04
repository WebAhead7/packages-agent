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

import { getAllPackages } from "../../api/api";
import { BorderColor } from "@material-ui/icons";

const data = [
  {
    addedAt: "10 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4011,
    longitude: -75.6903,
  },
  {
    addedAt: "13 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4211,
    longitude: -75.6803,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4111,
    longitude: -75.6603,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4111,
    longitude: -75.6803,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4111,
    longitude: -75.6203,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4011,
    longitude: -75.6913,
  },
  {
    addedAt: "28 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 45.4221,
    longitude: -75.6923,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 45.4212,
    longitude: -75.6907,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 45.4212,
    longitude: -75.6907,
  },
  {
    addedAt: "35 mins ago",
    status: "On transit",
    agent: "Mario",
    latitude: 45.4212,
    longitude: -75.6907,
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
  } = useContext(globalContext);

  useEffect(() => {
    getAllPackages(setPackages, auth.token);
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
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
                width: 80,
                height: 80,
                fontSize: 18,
              }}
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPackage(pack);
                setViewport({
                  latitude: selectedPackage ? pack.latitude : 45.4212,
                  longitude: selectedPackage ? pack.longitude : -75.6903,
                  width: "100vw",
                  height: "100vh",
                  zoom: 14,
                  transitionDuration: 300,
                });
              }}
            >
              Store
            </button>
          </Marker>
        ))}

        {selectedPackage ? (
          <Popup
            latitude={selectedPackage.latitude}
            longitude={selectedPackage.longitude}
            onClose={() => {
              setSelectedPackage(null);
            }}
          >
            <div>
              <h2>{selectedPackage.status}</h2>
              <p>{selectedPackage.addedAt}</p>
            </div>
          </Popup>
        ) : null}
        {selectedPackage && (
          <div
            style={{
              width: "100%",
              position: "fixed",
              top: 60,
              height: 50,
              background: "#fff",
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 15,
            }}
          >
            {`${selectedPackage.status}

            ${selectedPackage.addedAt}`}
          </div>
        )}
      </ReactMapGL>
    </>
  );
};

export default Map;
