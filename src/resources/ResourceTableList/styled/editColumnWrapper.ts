import styled from "styled-components";

const EditColumnWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  button[class*="p-button-rounded"] {
    padding: 5px !important;
    width: unset;
    height: unset !important;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    & > span {
      font-size: 8px !important;
    }
  }
`;

export default EditColumnWrapper;
