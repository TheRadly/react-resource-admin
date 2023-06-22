"use client";

import styled from "styled-components";

const StatusTagWrapper = styled.div`
  span[class*="p-tag p-component p-tag-info"] {
    background: var(--clr-hoverBackgroundColor) !important;
  }

  span[class*="p-tag p-component p-tag-danger"] {
    background: none !important;
    color: var(--clr-hoverBackgroundColor) !important;
    border: 1px solid var(--clr-hoverBackgroundColor) !important;
  }
`;

export default StatusTagWrapper;
