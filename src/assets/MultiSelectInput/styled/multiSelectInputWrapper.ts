import styled from "styled-components";

const MultiSelectInputWrapper = styled.div<{ fullWidth?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  & > div {
    width: 100%;
  }

  @media (min-width: 961px) {
    width: ${(props) => (props.fullWidth ? "100%" : "50%")} !important;
  }
`;

export default MultiSelectInputWrapper;
