import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  button {
    background: none !important;
    border: 1px solid var(--clr-hoverBackgroundColor) !important;

    span {
      color: var(--clr-hoverBackgroundColor) !important;
    }
  }
`;

export default InputContainer;
