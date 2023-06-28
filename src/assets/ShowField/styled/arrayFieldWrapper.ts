import styled from "styled-components";

export const ArrayFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-top: 1px solid var(--clr-borderColor);

  & > span {
    font-size: 12px;
    color: var(--clr-blackFontColor);
    margin: 5px 0;
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export const FieldsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--clr-fontColor);

  & > p {
    margin: 0;
  }
`;
