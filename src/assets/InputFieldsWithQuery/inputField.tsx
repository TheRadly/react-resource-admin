import React from "react";
import { Button } from "primereact/button";
import InputFieldWrapper from "./styled/inputFieldWrapper";
import useInputField from "./talons/useInputField";
import { BUTTON_INPUT, EDIT_ICON, TRASH_ICON } from "../../staticTexts";
import InputFieldButtonsContainer from "./styled/inputFieldButtonsContainer";
import { ConfirmPopup } from "primereact/confirmpopup";
import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";

interface InputFieldProps {
  deleteTooltip?: string;
  editTooltip?: string;
  item: object;
  fieldsToExclude?: string[];
  extraFormCruds?: CrudType;
  handleShowQueryContainer?: (item?: any) => void;
}

const InputField = ({
  deleteTooltip,
  editTooltip,
  item,
  fieldsToExclude,
  extraFormCruds,
  handleShowQueryContainer,
}: InputFieldProps) => {
  const { fields, handleDeleteItem } = useInputField({
    item,
    fieldsToExclude,
    extraFormCruds,
  });

  return (
    <InputFieldWrapper>
      {fields.map(({ field, value }) => (
        <>
          <label>{field}:</label>
          <span>{value}</span>
          <InputFieldButtonsContainer>
            <ConfirmPopup />
            <Button
              type={BUTTON_INPUT}
              tooltip={deleteTooltip}
              onClick={handleDeleteItem}
              rounded
              icon={TRASH_ICON}
            />
            <Button
              type={BUTTON_INPUT}
              tooltip={editTooltip}
              onClick={() =>
                handleShowQueryContainer && handleShowQueryContainer(item)
              }
              rounded
              icon={EDIT_ICON}
            />
          </InputFieldButtonsContainer>
        </>
      ))}
    </InputFieldWrapper>
  );
};

export default InputField;
