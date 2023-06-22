import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import LoaderSpinnerWrapper from "./styled/loaderSpinnerWrapper";

interface LoaderSpinnerProps {
  style?: object;
  strokeWidth?: string;
}

const LoaderSpinner = ({ style, strokeWidth = "4" }: LoaderSpinnerProps) => (
  <LoaderSpinnerWrapper>
    <ProgressSpinner style={style} strokeWidth={strokeWidth} />
  </LoaderSpinnerWrapper>
);

export default LoaderSpinner;
