import styled from "styled-components";

const DropdownInputWrapper = styled.span<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")} !important;

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
`;

export default DropdownInputWrapper;
