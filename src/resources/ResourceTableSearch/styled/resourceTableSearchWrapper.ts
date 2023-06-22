import styled from "styled-components";

const ResourceTableSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;

  & > span {
    width: 50px;
    margin-bottom: 0;
  }

  span[class*="p-dropdown-label p-inputtext"] {
    padding: 0.5rem 0.75rem;
  }

  div[class*="p-inputswitch p-component"] {
    width: 100% !important;

    div {
      width: 100%;
    }
  }

  div {
    width: 100%;

    & > input {
      padding: 0.5rem 0.75rem;
    }
  }

  @media (min-width: 961px) {
    justify-content: flex-end;

    div {
      width: unset;
    }
  }
`;

export default ResourceTableSearchWrapper;
