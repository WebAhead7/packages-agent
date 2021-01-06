import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getOwnerProfile } from "../../api/api";
import moment from "moment";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
  AppBar,
  IconButton,
} from "@material-ui/core";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import useStyles from "./styles";
import Loader from "../../components/Loader";
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import StoreIcon from "@material-ui/icons/Store";
import StoreOverMap from "../../components/StoreOverMap";
import { getMyLocation } from "../../App";
import axios from "axios";
import { getAllPackages } from "../../api/api";

const data = [
  {
    addedAt: "10 mins ago",
    status: "Pending",
    agent: "Pending",
    latitude: 32.8522,
    longitude: 35.2013,
  },
  {
    addedAt: "13 mins ago",
    status: "Pending",
    agent: "Pending",
    longitude: 32.867,
    latitude: 35.1818,
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
    setMyLocation,
    setPackages,
    myLocation,
  } = useContext(globalContext);

  const [viewport, setViewport] = useState({
    latitude: myLocation?.coords?.latitude,
    longitude: myLocation?.coords?.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [agentPosition, setAgentPosition] = useState(myLocation);

  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    // getAllPackages(setPackages, auth.token);

    if (!viewport.latitude?.coords?.latitude) {
      getMyLocation((position) => {
        setViewport({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          width: "100vw",
          height: "100vh",
          zoom: 10,
        });
        setAgentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      setAgentPosition({
        latitude: myLocation.coords.latitude,
        longitude: myLocation.coords.longitude,
      });
    }
  }, []);

  const ACCESS_TOKEN =
    "pk.eyJ1IjoiYWxhYWJhc2hpeWkiLCJhIjoiY2tqaXE0cmIwNGk2MDJzbnEydnA1bGNiaiJ9.Ifn9RWUyzZYUirLQTX6GUQ";

  const calculateRoute = (selectedPackage) => {
    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${agentPosition.longitude},${agentPosition.latitude};${selectedPackage.longitude},${selectedPackage.latitude}?access_token=${ACCESS_TOKEN}`
      )
      .then((res) => {
        const distance = res.data.routes[0].distance / 1000;
        const duration = res.data.routes[0].duration / 60;

        setSelectedPackage((prevPackage) => {
          return { ...prevPackage, distance, duration };
        });
      });
  };

  if (!packages) return <Loader />;

  console.log(packages.data[0].address.address.longitude);

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {packages &&
          packages.data.map((pack, index) => (
            <Marker
              key={index}
              latitude={+pack.address.address.latitude}
              longitude={+pack.address.address.longitude}
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
                  calculateRoute({
                    latitude: +pack.address.address.latitude,
                    longitude: +pack.address.address.longitude,
                  });
                  setViewport({
                    latitude: selectedPackage
                      ? +pack.address.address.latitude
                      : 32.827,
                    longitude: selectedPackage
                      ? +pack.address.address.longitude
                      : 35.1818,
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
              latitude={+selectedPackage.address.address.latitude}
              longitude={+selectedPackage.address.address.latitude}
              onClose={() => {
                setSelectedPackage(null);
              }}
            >
              <div>
                {selectedPackage.distance && (
                  <>
                    <h4>{selectedPackage.duration.toFixed()} mins</h4>

                    <h4>{selectedPackage.distance.toFixed(2)} KM</h4>
                  </>
                )}
              </div>
            </Popup>
          </>
        ) : null}
        {selectedPackage && <StoreOverMap />}
        <IconButton
          onClick={() =>
            setViewport({
              latitude: agentPosition.latitude,
              longitude: agentPosition.longitude,
              width: "100vw",
              height: "100vh",
              zoom: 14,
              transitionDuration: 300,
            })
          }
          style={{
            background: "#1976D2",
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
        >
          <GpsFixedIcon style={{ color: "#fff" }} />
        </IconButton>
      </ReactMapGL>
    </>
  );
};

export default Map;
