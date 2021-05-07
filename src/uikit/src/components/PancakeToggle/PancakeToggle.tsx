import React from "react";
import { VeganStack, VeganInput, VeganLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <VeganStack scale={scale}>
    <VeganInput id={props.id || "vegan-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <VeganLabel scale={scale} checked={checked} htmlFor={props.id || "vegan-toggle"}>
      <div className="vegans">
        <div className="vegan" />
        <div className="vegan" />
        <div className="vegan" />
        <div className="butter" />
      </div>
    </VeganLabel>
  </VeganStack>
);

PancakeToggle.defaultProps = {
  scale: scales.MD,
};

export default PancakeToggle;
