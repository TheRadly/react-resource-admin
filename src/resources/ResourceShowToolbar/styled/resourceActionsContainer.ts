import styled from "styled-components";

const ResourceActionsContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 0;

  button {
    background: none !important;
    border-color: var(--clr-hoverBackgroundColor) !important;
    color: var(--clr-hoverBackgroundColor) !important;

    &:hover {
      background: var(--clr-hoverBackgroundColor) !important;
      color: var(--clr-white) !important;
    }
  }
`;

export default ResourceActionsContainer;
