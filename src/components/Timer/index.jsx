import React, { useEffect, useState } from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";
import Loader from "../../components/Loader";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

const Timer = (props) => {
  const { updatedAt } = props.data;

  const [timer, setTimer] = useState(null);

  const styles = useStyles();

  useEffect(() => {
    const timer = setInterval(function () {
      const now = new Date().getTime();
      const deadline = new Date(updatedAt).getTime() + 20000000;
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);
      const updatedTimer = hours + "h " + minutes + "m " + seconds + "s ";
      setTimer(updatedTimer);
      if (t < 0) {
        clearInterval(timer);
        const timeOut = "TIME OUT";
        setTimer(timeOut);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!updatedAt && !timer) return <Loader />;

  return (
    <div
      style={{
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        boxShadow: "1px 1px 25px #9E9E9E",
        borderRadius: 7,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#9E9E9E",
        background: "#EEEEEE",
      }}
    >
      <h4>Time left to pickup</h4>
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
