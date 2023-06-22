import { useCallback, useMemo } from "react";

interface UseResourceForm {
  isEdit?: boolean;
  formHandler: { setFieldValue: any; handleSubmit: any };
  saveLabel?: string;
  createLabel?: string;
}

const useResourceForm = ({
  isEdit,
  formHandler,
  saveLabel,
  createLabel,
}: UseResourceForm) => {
  const { setFieldValue, handleSubmit } = formHandler;

  const handleChangeField = useCallback(
    (value: string | number | boolean, field: string) => {
      setFieldValue(field, value);
    },
    [setFieldValue]
  );

  const submitButtonLabel = useMemo(
    () => (isEdit ? saveLabel : createLabel),
    [isEdit, saveLabel, createLabel]
  );

  return {
    handleSubmit,
    handleChangeField,
    submitButtonLabel,
  };
};

export default useResourceForm;
