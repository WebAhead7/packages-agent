import React, { useContext } from "react";
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

import useStyles from "./styles";

const Filter = () => {
  const styles = useStyles();
  const { filter, setFilter } = useContext(globalContext);

  const handlerFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.root}>
      <Accordion style={{ backgroundColor: "#F5F5F5" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.heading}>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup value={filter} onChange={handlerFilter}>
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="Pending"
              />
              <FormControlLabel
                value="picked"
                control={<Radio />}
                label="Picked"
              />
              <FormControlLabel
                value="delivered"
                control={<Radio />}
                label="Delivered"
              />
              <FormControlLabel
                value="over2days"
                control={<Radio />}
                label="Over 2 days"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
