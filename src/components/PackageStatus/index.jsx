import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Pending",
    "In proccess",
    "Waiting to be delivered",
    "In transit",
    "Delivered",
  ];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const { status } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    "Pending",
    "In proccess",
    "Waiting to be delivered",
    "On transit",
    "Delivered",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (status === "Waiting for confirmation") {
      setActiveStep(steps.indexOf("On transit"));
    } else {
      setActiveStep(steps.indexOf(status));
    }
  }, [status]);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flex: 1,
        width: "95%",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div></div>
    </div>
  );
}
