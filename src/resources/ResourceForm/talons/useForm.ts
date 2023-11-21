import { useFormik } from "formik";
import { useCallback, useEffect, useMemo } from "react";
import typenameIdFilter from "../../../utils/typenameIdFilter";

interface UseFormProps {
  initialValues?: any;
  onSubmitMethod: any;
  valuesForEdit?: any;
  omitValuesForEdit?: any;
  validation?: any;
  loading?: boolean;
  validateOnMount?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
}

const useForm = ({
  initialValues = null,
  onSubmitMethod,
  valuesForEdit,
  omitValuesForEdit,
  validation,
  loading,
  validateOnMount = false,
  validateOnBlur = false,
  validateOnChange = false,
}: UseFormProps) => {
  const form = useFormik({
    ...(validation ? { validationSchema: validation } : null),
    initialValues: typenameIdFilter(initialValues || {}) as any,
    onSubmit: onSubmitMethod,
    validateOnMount,
    validateOnBlur,
    validateOnChange,
  });

  const { values: formValues, setFieldValue, handleSubmit } = form;

  useEffect(() => {
    if (valuesForEdit && !initialValues) {
      const filteredValues = typenameIdFilter(
        { ...valuesForEdit },
        omitValuesForEdit && [...omitValuesForEdit]
      );

      form.setValues(filteredValues);
    }
  }, [initialValues, omitValuesForEdit, valuesForEdit, loading]);

  const values = useMemo(
    () =>
      Object.keys(formValues).map((field) => ({
        field,
        value: formValues[field],
      })),
    [formValues]
  );

  const handleChangeField = useCallback(
    (value: string | number | boolean, field: string) => {
      setFieldValue(field, value);
    },
    [setFieldValue]
  );

  return {
    formHandler: form,
    formValues,
    values,
    setFieldValue,
    handleChangeField,
    handleSubmit,
  };
};

export default useForm;
