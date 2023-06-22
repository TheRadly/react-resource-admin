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
  handleChangeField: (data: string, field: string) => void;
  saveLabel?: string;
  createLabel?: string;
  cancelLabel: string;
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
}: ResourceFormProps) => {
  const { handleSubmit, submitButtonLabel } = useResourceForm({
    isEdit,
    formHandler,
    saveLabel,
    createLabel,
  });

  return (
    <ResourceInputsFormWrapper onSubmit={handleSubmit}>
      {children ||
        values.map(
          ({
            field,
            value,
            activeValue,
            isMultiInput,
            isJson,
            withChildQuery,
            excludeFields,
            isFloat,
          }) => (
            <UniversalInput
              extraFormCruds={extraFormCruds}
              fieldsToExcludeInQueryInput={excludeFields}
              isShowQueryContainer={isShowQueryContainer}
              handleShowQueryContainer={handleShowQueryContainer}
              withChildQuery={withChildQuery}
              isJson={isJson}
              isMultiInput={isMultiInput}
              currentOption={activeValue}
              label={field}
              disabled={loading}
              value={value}
              isFloat={isFloat}
              onChange={(data) => handleChangeField(data, field)}
            />
          )
        )}
      <ButtonsWrapper>
        <Button loading={loading} type={SUBMIT_INPUT}>
          {submitButtonLabel}
        </Button>
        <Button disabled={loading} type={BUTTON_INPUT} onClick={onCancel}>
          {cancelLabel}
        </Button>
      </ButtonsWrapper>
    </ResourceInputsFormWrapper>
  );
};

export default ResourceForm;
