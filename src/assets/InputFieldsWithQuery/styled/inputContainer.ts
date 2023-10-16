import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-family: var(--font-family);

  button {
    span {
      color: var(--clr-hoverBackgroundColor) !important;
    }
  }
`;

export default InputContainer;
