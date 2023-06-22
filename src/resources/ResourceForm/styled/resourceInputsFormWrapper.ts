import styled from "styled-components";

const ResourceInputsFormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > span {
    width: 100%;

    & > span {
      width: 100%;
    }
  }
`;

export default ResourceInputsFormWrapper;
