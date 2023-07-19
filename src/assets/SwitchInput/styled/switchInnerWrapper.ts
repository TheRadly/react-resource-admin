import styled from "styled-components";

const SwitchInnerWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export default SwitchInnerWrapper;
