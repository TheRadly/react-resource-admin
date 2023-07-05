import { styled } from "styled-components";

const InputMultiFieldWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  & > span {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export default InputMultiFieldWrapper;
