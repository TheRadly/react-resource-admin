import styled from "styled-components";

const DropdownInputWrapper = styled.span<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")} !important;

  & > div {
    width: 100%;
  }
`;

export default DropdownInputWrapper;
