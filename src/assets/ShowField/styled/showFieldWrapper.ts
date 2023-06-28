import styled from "styled-components";

const ShowFieldWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 5px;
  border-bottom: 1px solid var(--clr-borderColor);
  font-weight: 400 !important;
  color: var(--clr-fontColor);

  &:last-child {
    border-bottom: 0;
  }

  & > span:first-child {
    font-size: 12px;
    color: var(--clr-blackFontColor);
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`;

export default ShowFieldWrapper;
