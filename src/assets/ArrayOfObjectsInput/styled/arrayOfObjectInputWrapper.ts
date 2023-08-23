import styled from "styled-components";

export const ArrayOfObjectsInputWrapper = styled.span<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "50%")} !important;

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }

  & > div {
    width: 100%;
  }
`;

export const ArrayOfObjectsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--surface-100);
  padding: 10px;
  border-radius: 6px;

  span {
    font-family: var(--font-family);
    font-size: 14px;
    color: var(--surface-800);
  }
`;

export const ArrayOfObjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const ArrayOfObjectsInputsBox = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1.5px solid var(--surface-300);
`;

export const ArrayOfObjectsItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ArrayOfObjectsItemData = styled.div`
  display: flex;
  gap: 10px;
`;

export const ArrayOfObjectsItemDataFields = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    &:first-child {
      &::after {
        content: ":";
      }
    }
  }
`;
