import styled from "styled-components";

const JsonEditorWrapper = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  height: 350px;
  margin-bottom: 20px;

  & > span {
    font-size: 14px;
    color: var(--clr-blackFontColor);
  }

  & > section {
    margin-top: 10px;
    border: 1px solid var(--clr-borderColor);
    padding: 10px;
  }
`;

export default JsonEditorWrapper;
