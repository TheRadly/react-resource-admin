import styled from "styled-components";

const PageActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 10px;

  button {
    background: var(--clr-hoverBackgroundColor);
    border-color: transparent;

    &:focus {
      box-shadow: none !important;
    }

    &:hover {
      border-color: transparent !important;
      background: var(--clr-backgroundColor-2) !important;
    }
  }
`;

export default PageActionsWrapper;
