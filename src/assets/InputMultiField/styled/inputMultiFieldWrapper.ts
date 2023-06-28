import { styled } from "styled-components";

const InputMultiFieldWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  & > span {
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export default InputMultiFieldWrapper;
