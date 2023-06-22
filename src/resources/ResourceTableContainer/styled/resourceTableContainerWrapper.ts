import styled from "styled-components";

const ResourceTableContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div[class*="p-datatable"] {
    width: 100%;
  }
`;

export default ResourceTableContainerWrapper;
