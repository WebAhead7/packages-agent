import React, { useContext, useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { globalContext } from "../../context/context";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PayFilter = ({ cost, setCost }) => {
  const handlerPay = (e, v) => {
    setCost(v);
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <Typography gutterBottom>Pay</Typography>
      <PaySlider
        value={cost}
        min={0}
        max={75}
        onChange={handlerPay}
        valueLabelDisplay="auto"
        aria-label="radius slider"
        defaultValue={20}
      />
    </FormControl>
  );
};

const PaySlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default PayFilter;
