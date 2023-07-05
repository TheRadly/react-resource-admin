import styled from "styled-components";

const InputArrayWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  ul {
    width: 100%;
  }
`;

export default InputArrayWrapper;
