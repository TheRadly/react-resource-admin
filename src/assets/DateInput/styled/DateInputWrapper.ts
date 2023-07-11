import styled from "styled-components";

const DateInputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "50%")} !important;

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  & > span {
    max-height: 45px !important;
  }
`;

export default DateInputWrapper;
