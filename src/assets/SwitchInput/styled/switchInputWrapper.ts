import styled from "styled-components";

const SwitchInputWrapper = styled.span`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export default SwitchInputWrapper;
