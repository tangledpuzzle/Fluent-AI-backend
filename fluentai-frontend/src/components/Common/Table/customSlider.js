import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import useWindowSize from "../../../Hooks/useWindowSize";

const CustomizedSlider = ({ source = null,setFluency, val }) => {
  const [sliderValue, setSliderValue] = useState(val ? val : 50);
const windowSize = useWindowSize();
const marks = [
  {
    value: 0,
    label: windowSize?.width < 565 ? "Beg" : "Beginner",
  },
  {
    value: 50,
    label: windowSize?.width < 565 ? "Int" : "Intermediate",
  },
  {
    value: 100,
    label: windowSize?.width < 565 ? "Adv" :  "Advanced",
  },
];

const handleChange = (event, value) => {
    if(value == 0)
      setFluency(1)
    if(value === 50)
      setFluency(2)  
    if(value === 100)
      setFluency(3)
    setSliderValue(value);
  };

  useEffect(() => {
    if(val && val !== NaN && val){
      setFluency(val)
      setSliderValue((val-1) * 50);
    }
  }, [val]);

  return (
    <div>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        marks={marks}
        step={null}
        sx={{
          color: "#a558c8",
          height: 3,
          "& .MuiSlider-thumb": {
            height: 20,
            width: 20,
            borderRadius: "50%",
            backgroundColor: "#a558c8",
            border: "0.3rem solid white",
            boxShadow: "none",
            "&:hover, &.Mui-active": {
              boxShadow: "none",
            },
          },
          "& .MuiSlider-rail": {
            height: 4,
          },
          "& .MuiSlider-markLabel": {
            fontSize:
              source === "navBar"
                ? "13px"
                : windowSize.width < 768
                ? "12px"
                : "16px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "164.52%",
            letterSpacing: "-0.01em",
            color: "#1F0929",
            marginTop: "-3.6rem",
            opacity: 0.4,
            whiteSpace: "nowrap", // Prevent label text from wrapping
            overflow: "hidden", // Hide overflow of label text
            
          },
          "& .MuiSlider-mark": {
            width: 0, // Hide default mark lines
          },
          '& .MuiSlider-markLabel[data-index="0"]': {
            opacity: sliderValue === 0 ? 1 : 0.5,
            // color: sliderValue === 0 ? '#000000' : '#bbadc9'
          },
          '& .MuiSlider-markLabel[data-index="1"]': {
            opacity: sliderValue === 25 ? 1 : 0.5,
          },
          '& .MuiSlider-markLabel[data-index="2"]': {
            opacity: sliderValue === 50 ? 1 : 0.5,
          },
          '& .MuiSlider-markLabel[data-index="3"]': {
            opacity: sliderValue === 75 ? 1 : 0.5,
          },
          '& .MuiSlider-markLabel[data-index="4"]': {
            opacity: sliderValue === 100 ? 1 : 0.5,
          },
        }}
      />
    </div>
  );
};

export default CustomizedSlider;
