import styled from "styled-components";

const CrudWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;

  div[class*="p-progress-spinner"] {
    height: 100% !important;
  }
`;

export default CrudWrapper;
