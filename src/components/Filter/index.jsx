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

import { useStyles_type, useStyles_radius, useStyles_cost } from "./styles";

const Filter = (radius, setRadius) => {
  const classes_type = useStyles_type();
  const classes_radius = useStyles_radius();
  // const classes_cost = useStyles_cost();
  // const { type, setType } = useContext(globalContext);
  // const { radius, setRadius } = useContext(globalContext);
  // const { cost, setCost } = useContext(globalContext);

  const [type, setType] = useState("all");
  // const [radius, setRadius] = useState(null);
  const [cost, setCost] = useState(null);

  const handlerType = (e, v) => {
    setType(v);
  };
  const handlerRadius = (e, v) => {
    setRadius(e.target.value);
  };
  const handlerCost = (e, v) => {
    setCost(v);
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

  return (
    <Accordion style={{ backgroundColor: "#F5F5F5" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes_type.heading}>Filter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes_type.root}>
          <FormControl component="fieldset">
            <RadioGroup row value={type} onChange={handlerType}>
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="Food" control={<Radio />} label="Food" />
              <FormControlLabel
                value="Parcel"
                control={<Radio />}
                label="Parcel"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes_radius.root}>
          <FormControl component="fieldset" fullWidth>
            <Typography className={classes_radius.heading} gutterBottom>
              Radius
            </Typography>
            <RadiusSlider
              value={radius}
              min={0}
              max={75}
              onChange={handlerRadius}
              valueLabelDisplay="auto"
              aria-label="radius slider"
              defaultValue={20}
            />
          </FormControl>
          <FormControl component="fieldset" fullWidth>
            <Typography className={classes_radius.heading} gutterBottom>
              Pay
            </Typography>
            <RadiusSlider
              value={cost}
              min={0}
              max={50}
              onChange={handlerCost}
              valueLabelDisplay="auto"
              aria-label="cost slider"
              defaultValue={35}
            />
          </FormControl>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
