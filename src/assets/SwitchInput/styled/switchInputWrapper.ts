import styled from "styled-components";

const SwitchInputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  span[class*="p-inputswitch-slider"] {
    border-radius: 6px !important;

    &::before {
      border-radius: 6px !important;
    }
  }
`;

export default SwitchInputWrapper;
