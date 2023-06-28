import styled from "styled-components";

const InputFieldsWithQueryWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-family: var(--font-family);
    text-transform: capitalize;
    font-size: 14px;
    color: var(--clr-blackFontColor);
    margin-bottom: 10px;
  }
`;

export default InputFieldsWithQueryWrapper;
