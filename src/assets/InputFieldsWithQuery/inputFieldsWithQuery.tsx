import { Button } from "primereact/button";
import InputFieldsWithQueryWrapper from "./styled/inputFieldsWithQueryWrapper";
import InputFieldsWrapper from "./styled/inputFieldsWrapper";
import useInputFieldsWithQuery from "./talons/useInputFieldsWithQuery";
import InputContainer from "./styled/inputContainer";
import { BUTTON_INPUT } from "../../staticTexts";
import InputField from "./inputField";
import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface InputFieldsWithQueryProps {
  label?: string;
  emptyLabel?: string;
  values: any[];
  isShowQueryContainer?: boolean;
  handleShowQueryContainer?: (item?: any) => void;
  fieldsToExclude?: string[];
  extraFormCruds?: CrudType;
  fullWidth?: boolean;
  disabled?: boolean;
  closeTooltipLabel?: string;
  addTooltipLabel?: string;
  deleteTooltipLabel?: string;
  editTooltipLabel?: string;
  error?: string;
}

const InputFieldsWithQuery = ({
  label,
  emptyLabel,
  values,
  isShowQueryContainer,
  handleShowQueryContainer,
  fieldsToExclude,
  extraFormCruds,
  fullWidth,
  disabled,
  closeTooltipLabel,
  addTooltipLabel,
  deleteTooltipLabel,
  editTooltipLabel,
  error,
}: InputFieldsWithQueryProps) => {
  const { tooltipLocale, buttonIcon } = useInputFieldsWithQuery({
    isShowQueryContainer,
    closeTooltipLabel,
    addTooltipLabel,
  });

  return (
    <InputFieldsWithQueryWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <InputContainer>
        <InputFieldsWrapper id={label}>
          {values.length
            ? values.map((item: any) => (
                <InputField
                  deleteTooltip={deleteTooltipLabel}
                  editTooltip={editTooltipLabel}
                  handleShowQueryContainer={handleShowQueryContainer}
                  fieldsToExclude={fieldsToExclude}
                  item={item}
                  extraFormCruds={extraFormCruds}
                />
              ))
            : emptyLabel}
        </InputFieldsWrapper>
        <Button
          disabled={disabled}
          onClick={() => handleShowQueryContainer && handleShowQueryContainer()}
          outlined
          icon={buttonIcon}
          tooltip={tooltipLocale}
          type={BUTTON_INPUT}
        />
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputFieldsWithQueryWrapper>
  );
};

export default InputFieldsWithQuery;
