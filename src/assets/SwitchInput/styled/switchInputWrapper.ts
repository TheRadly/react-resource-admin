import styled from "styled-components";

const SwitchInputWrapper = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--clr-blackFontColor);
  margin-bottom: 10px;

  div[class*="p-inputswitch-checked"] {
    span {
      background: var(--clr-hoverBackgroundColor) !important;
    }
  }
`;

export default SwitchInputWrapper;
