import styled from "styled-components";
import InputFieldsWithQueryWrapper from "./inputFieldsWithQueryWrapper";

const InputFieldsWrapper = styled(InputFieldsWithQueryWrapper)`
  width: 100%;
  border: 1px solid var(--clr-inputBorderColor);
  padding: 10px;
  border-radius: 5px;
  color: var(--clr-fontColor);
`;

export default InputFieldsWrapper;
