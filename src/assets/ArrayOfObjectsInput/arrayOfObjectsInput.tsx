import { Button } from "primereact/button";
import UniversalInput from "../UniversalInput";
import {
  ArrayOfObjectsInputWrapper,
  ArrayOfObjectsContainer,
  ArrayOfObjectsInputsBox,
  ArrayOfObjectsItems,
} from "./styled/arrayOfObjectInputWrapper";
import useArrayOfObjectsInput from "./talons/useArrayOfObjectsInput";
import { PLUS_ICON } from "../../staticTexts";

interface ArrayOfObjectsInputProps {
  label?: string;
  values: any[];
  fullWidth?: boolean;
  initialValue?: any;
  itemTitledBy?: string;
  onChange: (arg: any) => void;
  emptyMessage?: string;
  disabled?: boolean;
}

const ArrayOfObjectsInput = ({
  label,
  values,
  fullWidth,
  initialValue,
  itemTitledBy,
  onChange,
  emptyMessage,
  disabled,
}: ArrayOfObjectsInputProps) => {
  const {
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData,
  } = useArrayOfObjectsInput({
    onChange,
    initialValue,
    values,
    itemTitledBy,
  });

  return (
    <ArrayOfObjectsInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <ArrayOfObjectsItems>
        {arrayOfItems.length ? (
          arrayOfItems.map((item, index) => (
            <div>
              <span>{index}.</span>
              <div>
                {Object.keys(item).map((key) => (
                  <div>
                    <span>{key}</span>
                    <span>{item[key]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <span>{emptyMessage}</span>
        )}
      </ArrayOfObjectsItems>
      <ArrayOfObjectsContainer>
        <ArrayOfObjectsInputsBox>
          {arrayOfFields.map((item: any) => (
            <UniversalInput
              isArrayWithObjects={item.isArrayWithObjects}
              isMultiSelect={item.isMultiSelect}
              isArray={item.isArray}
              isDate={item.isDate}
              isDisabled={item.isDisabled}
              isJson={item.isJson}
              isMultiInput={item.isMultiInput}
              isTextArea={item.isTextArea}
              isFloat={item.isFloat}
              label={item.field}
              value={item.value}
              onChange={(data) => handleChangeFieldValue(item.field, data)}
            />
          ))}
        </ArrayOfObjectsInputsBox>
        <Button
          type="button"
          disabled={disabled}
          outlined
          icon={PLUS_ICON}
          onClick={handleSetFieldsData}
        />
      </ArrayOfObjectsContainer>
    </ArrayOfObjectsInputWrapper>
  );
};

export default ArrayOfObjectsInput;
