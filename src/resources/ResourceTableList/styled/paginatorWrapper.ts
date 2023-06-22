import styled from "styled-components";

const PaginatorWrapper = styled.div`
  button[class*="p-highlight"] {
    background: var(--clr-tableActiveColor) !important;
    color: var(--clr-white) !important;
  }
`;

export default PaginatorWrapper;
