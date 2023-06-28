import styled from "styled-components";

const InputArrayWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    text-transform: capitalize;
    font-family: var(--font-family);
    font-size: 14px;
    color: var(--clr-blackFontColor);
  }

  ul {
    width: 100%;
  }
`;

export default InputArrayWrapper;
