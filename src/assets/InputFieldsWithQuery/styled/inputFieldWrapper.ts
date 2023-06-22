import styled from "styled-components";

const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 10px;
  color: var(--clr-fontColor);
  background: var(--clr-whiteGrey);
  border: 1px solid var(--clr-borderColor);
  border-radius: 5px;

  label {
    margin-bottom: 0;
  }

  span {
    font-size: 14px;
  }
`;

export default InputFieldWrapper;
