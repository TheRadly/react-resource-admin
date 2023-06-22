import styled from "styled-components";

const LoaderSpinnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  circle {
    stroke: var(--clr-hoverBackgroundColor) !important;
  }
`;

export default LoaderSpinnerWrapper;
