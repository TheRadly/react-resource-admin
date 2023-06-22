import styled from "styled-components";

const InputFloatLabelWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};

  & > label {
    font-size: 14px;
    color: var(--clr-blackFontColor);
  }

  & > span {
    max-height: 45px !important;
  }
`;

export default InputFloatLabelWrapper;
