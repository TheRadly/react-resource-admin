import { Button } from "primereact/button";
import UniversalInput from "../UniversalInput";
import {
  ArrayOfObjectsInputWrapper,
  ArrayOfObjectsContainer,
  ArrayOfObjectsInputsBox,
  ArrayOfObjectsItems,
  ArrayOfObjectsItem,
  ArrayOfObjectsItemData,
  ArrayOfObjectsItemDataFields,
  ArrayOfObjectsItemIndex,
  ArrayOfObjectsItemActions,
} from "./styled/arrayOfObjectInputWrapper";
import useArrayOfObjectsInput from "./talons/useArrayOfObjectsInput";
import { CHECK_ICON, EDIT_ICON, PLUS_ICON } from "../../staticTexts";
import { TRASH_ICON } from "../../staticTexts";
import { EXCLUDED_FIELD_ITEMS, TOURNAMENT_ID, ID } from "./config";

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
    isEditMode,
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData,
    handleSetEditedFieldData,
    handleRemoveItem,
    handleEditItem,
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
            <ArrayOfObjectsItem>
              <ArrayOfObjectsItemIndex>{index}</ArrayOfObjectsItemIndex>
              <ArrayOfObjectsItemData>
                {Object.keys(item)
                  .filter(
                    (filterKey) => !EXCLUDED_FIELD_ITEMS.includes(filterKey)
                  )
                  .map((key) => (
                    <ArrayOfObjectsItemDataFields>
                      <span>{key}</span>
                      <span>{item[key]}</span>
                    </ArrayOfObjectsItemDataFields>
                  ))}
              </ArrayOfObjectsItemData>
              <ArrayOfObjectsItemActions>
                <Button
                  type="button"
                  disabled={disabled}
                  rounded
                  outlined
                  icon={TRASH_ICON}
                  onClick={() => handleRemoveItem(index)}
                />
                <Button
                  type="button"
                  disabled={disabled}
                  rounded
                  outlined
                  icon={EDIT_ICON}
                  onClick={() => handleEditItem(item, index)}
                />
              </ArrayOfObjectsItemActions>
            </ArrayOfObjectsItem>
          ))
        ) : (
          <span>{emptyMessage}</span>
        )}
      </ArrayOfObjectsItems>
      <ArrayOfObjectsContainer>
        <ArrayOfObjectsInputsBox>
          {arrayOfFields
            .filter((filterItem: any) => filterItem.field !== TOURNAMENT_ID)
            .map((item: any) => (
              <UniversalInput
                disabled={item.field === ID}
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
                onChange={(data) =>
                  item.field !== ID
                    ? handleChangeFieldValue(item.field, data)
                    : null
                }
              />
            ))}
        </ArrayOfObjectsInputsBox>
        {isEditMode ? (
          <Button
            type="button"
            disabled={disabled}
            outlined
            icon={CHECK_ICON}
            onClick={handleSetEditedFieldData}
          />
        ) : (
          <Button
            type="button"
            disabled={disabled}
            outlined
            icon={PLUS_ICON}
            onClick={handleSetFieldsData}
          />
        )}
      </ArrayOfObjectsContainer>
    </ArrayOfObjectsInputWrapper>
  );
};

export default ArrayOfObjectsInput;
