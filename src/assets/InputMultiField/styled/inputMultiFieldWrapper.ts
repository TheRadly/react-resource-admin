import { styled } from "styled-components";

const InputMultiFieldWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
`;

export default InputMultiFieldWrapper;
