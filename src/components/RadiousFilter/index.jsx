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

const RadiousFilter = ({ radius, setRadius }) => {
  const handlerRadius = (e, v) => {
    setRadius(v);
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <Typography gutterBottom>Radius</Typography>
      <RadiusSlider
        value={radius}
        min={1}
        max={500}
        onChange={handlerRadius}
        valueLabelDisplay="auto"
        aria-label="radius slider"
        defaultValue={20}
      />
    </FormControl>
  );
};

const RadiusSlider = withStyles({
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

export default RadiousFilter;
