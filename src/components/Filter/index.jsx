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
import RadiousFilter from "../../components/RadiousFilter";
import PayFilter from "../PayFilter";
import TypeFilter from "../TypeFilter";
import { getAllPackagesByRadius } from "../../api/api";

import { useStyles_type, useStyles_radius, useStyles_cost } from "./styles";

const Filter = (props) => {
  const {
    radius,
    setRadius,
    cost,
    setCost,
    type,
    setType,
    refetch,
    myLocation,
    setPackages,
    token,
  } = props;

  const classes_type = useStyles_type();
  const classes_radius = useStyles_radius();

  const handleFilter = () => {
    getAllPackagesByRadius(setPackages, radius, myLocation, token);
  };

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
          <TypeFilter type={type} setType={setType} />
        </div>
        <div className={classes_radius.root}>
          <RadiousFilter radius={radius} setRadius={setRadius} />
          <PayFilter cost={cost} setCost={setCost} />
        </div>
      </AccordionDetails>
      <Button color="primary" onClick={handleFilter}>
        FILTER
      </Button>
    </Accordion>
  );
};

export default Filter;
