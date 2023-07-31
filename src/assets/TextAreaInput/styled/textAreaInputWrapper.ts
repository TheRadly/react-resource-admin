import styled from "styled-components";

const TextAreaInputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  textarea {
    width: 100%;
  }
`;

export default TextAreaInputWrapper;
