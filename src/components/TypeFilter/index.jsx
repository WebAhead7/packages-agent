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

const PayFilter = ({ type, setType }) => {
  const handlerType = (e, v) => {
    setType(v);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row value={type} onChange={handlerType}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="Food" control={<Radio />} label="Food" />
        <FormControlLabel value="Parcel" control={<Radio />} label="Parcel" />
      </RadioGroup>
    </FormControl>
  );
};

export default PayFilter;
