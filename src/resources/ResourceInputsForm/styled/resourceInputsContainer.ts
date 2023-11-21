import styled from "styled-components";

const ResourceInputsContainer = styled.div<{ isDoubleDisplay?: boolean }>`
  width: 100%;
  display: flex;
  ${(props) => (props.isDoubleDisplay ? "gap: 20px;" : "")}
`;

export default ResourceInputsContainer;
