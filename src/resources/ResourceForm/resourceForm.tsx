import { Button } from "primereact/button";
import UniversalInput from "../../assets/UniversalInput";
import ButtonsWrapper from "./styled/buttonsWrapper";
import ResourceInputsFormWrapper from "./styled/resourceInputsFormWrapper";
import { BUTTON_INPUT, SUBMIT_INPUT } from "../../staticTexts";
import { FieldsType } from "../ResourceInputsForm/models/FieldsType";
import { CrudType } from "../ResourceInputsForm/models/CrudType";
import useResourceForm from "./talons/useResourceForm";

interface ResourceFormProps {
  isEdit?: boolean;
  onCancel: () => void;
  typeName?: string;
  values: Array<FieldsType>;
  loading?: boolean;
  children?: any;
  extraFormCruds?: CrudType;
  isShowQueryContainer?: boolean;
  handleShowQueryContainer?: (item: any) => void;
  formHandler: any;
  handleChangeField?: (data: string, field: string | number | boolean) => void;
  saveLabel?: string;
  createLabel?: string;
  cancelLabel: string;
  hideCancel?: boolean;
}

const ResourceForm = ({
  loading,
  children,
  values,
  extraFormCruds,
  isShowQueryContainer,
  isEdit,
  handleShowQueryContainer,
  handleChangeField,
  formHandler,
  onCancel,
  saveLabel,
  createLabel,
  cancelLabel,
  hideCancel,
}: ResourceFormProps) => {
  const { handleSubmit, submitButtonLabel, handleSetFieldValue } =
    useResourceForm({
      isEdit,
      formHandler,
      saveLabel,
      createLabel,
      handleChangeField,
    });

  return (
    <ResourceInputsFormWrapper onSubmit={handleSubmit}>
      {children ||
        values.map(
          ({
            label,
            field,
            value,
            activeValue,
            isMultiInput,
            isMultiSelect,
            isJson,
            withChildQuery,
            excludeFields,
            isFloat,
            isDate,
            placeholder,
            isTextArea,
            isArray,
            initialValue,
            itemTitledBy,
            isArrayWithObject,
            emptyLabel,
            fullWidth,
            returnFullObjectEvent,
          }) => (
            <UniversalInput
              fullWidth={fullWidth}
              emptyLabel={emptyLabel}
              isArrayWithObjects={isArrayWithObject}
              initialValue={initialValue}
              itemTitledBy={itemTitledBy}
              isArray={isArray}
              isMultiSelect={isMultiSelect}
              isTextArea={isTextArea}
              isDate={isDate}
              extraFormCruds={extraFormCruds}
              fieldsToExcludeInQueryInput={excludeFields}
              isShowQueryContainer={isShowQueryContainer}
              handleShowQueryContainer={handleShowQueryContainer}
              withChildQuery={withChildQuery}
              isJson={isJson}
              isMultiInput={isMultiInput}
              currentOption={activeValue}
              label={label || field}
              placeholder={placeholder}
              disabled={loading}
              value={value}
              returnFullObjectEvent={returnFullObjectEvent}
              isFloat={isFloat}
              onChange={(data) => handleSetFieldValue(data, field)}
            />
          )
        )}
      <ButtonsWrapper>
        <Button loading={loading} type={SUBMIT_INPUT}>
          {submitButtonLabel}
        </Button>
        {!hideCancel && (
          <Button disabled={loading} type={BUTTON_INPUT} onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
      </ButtonsWrapper>
    </ResourceInputsFormWrapper>
  );
};

export default ResourceForm;
