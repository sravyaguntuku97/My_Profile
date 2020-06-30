import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressBar";

// Radial separators

const percentage = 66;

const Loader = (props) => (

  <div style={{ padding: "20px 20px 20px 20px" }}>
   
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={props.roundedValue}
        duration={1.4}
        easingFunction={easeQuadInOut}
        // repeat
      >
          
        {value => {
          const roundedValue = props.roundedValue;
          return (
              <div style={{width:"30%"}}>
                     <CircularProgressbar
              value={value}
            
              text={`${roundedValue}%`}
              styles={buildStyles({
                trailColor: "#484040c2",
                textColor: props.textColor,
                pathColor: props.pathColor,
                // trailColor: "gold"
               })}
            />
              </div>
         
          );
        }}
      </AnimatedProgressProvider>
  
  </div>
);



export default Loader
