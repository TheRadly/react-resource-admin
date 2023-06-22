import styled from "styled-components";

export const ArrayFieldsWrapper = styled.div`
  width: fit-content;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid var(--clr-borderColor);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ArrayFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--clr-borderColor);
  padding-right: 10px;

  &:last-child {
    border-right: 0;
    padding-right: 0;
  }

  & > p {
    margin: 0;
    margin-bottom: 5px;
    font-size: 12px;
    color: var(--clr-blackFontColor);
  }
`;
