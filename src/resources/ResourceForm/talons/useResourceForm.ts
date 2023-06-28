import { useCallback, useMemo } from "react";

interface UseResourceForm {
  isEdit?: boolean;
  formHandler: { setFieldValue: any; handleSubmit: any };
  saveLabel?: string;
  createLabel?: string;
  handleChangeField?: (data: string, field: string | number | boolean) => void;
}

const useResourceForm = ({
  isEdit,
  formHandler,
  saveLabel,
  createLabel,
  handleChangeField,
}: UseResourceForm) => {
  const { setFieldValue, handleSubmit } = formHandler;

  const handleSetFieldValue = useCallback(
    (value: string | number | boolean, field: string) => {
      if (handleChangeField) {
        handleChangeField(field, value);
      } else {
        setFieldValue(field, value);
      }
    },
    [handleChangeField, setFieldValue]
  );

  const submitButtonLabel = useMemo(
    () => (isEdit ? saveLabel : createLabel),
    [isEdit, saveLabel, createLabel]
  );

  return {
    handleSubmit,
    handleSetFieldValue,
    submitButtonLabel,
  };
};

export default useResourceForm;
