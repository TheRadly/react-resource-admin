import styled from "styled-components";

const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 10px;
  color: #495057;
  background: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 6px;

  label {
    font-family: var(--font-family);
    text-transform: capitalize;
    margin-bottom: 0;
  }

  span {
    font-size: 14px;
  }
`;

export default InputFieldWrapper;
