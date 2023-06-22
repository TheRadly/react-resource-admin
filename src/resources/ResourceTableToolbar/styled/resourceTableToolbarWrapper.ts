"use client";

import styled from "styled-components";

const ResourceTableToolbarWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;

  div[class*="p-toolbar p-component"] {
    justify-content: center;
    background: none;
    border: 0;
    padding: 0;
    padding-bottom: 20px;
    border-radius: 0;
    border-bottom: 1px solid var(--clr-borderColor);

    @media (min-width: 961px) {
      justify-content: space-between;
    }
  }
`;

export default ResourceTableToolbarWrapper;
