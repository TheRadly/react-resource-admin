import { useFormik } from "formik";
import { useCallback, useEffect, useMemo } from "react";
import typenameIdFilter from "../../../utils/typenameIdFilter";

interface UseFormProps {
  initialValues?: any;
  onSubmitMethod: any;
  valuesForEdit?: any;
  omitValuesForEdit?: any;
}

const useForm = ({
  initialValues = null,
  onSubmitMethod,
  valuesForEdit,
  omitValuesForEdit,
}: UseFormProps) => {
  const form = useFormik({
    initialValues: typenameIdFilter(initialValues || {}) as any,
    onSubmit: onSubmitMethod,
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
  }, [form, initialValues, omitValuesForEdit, valuesForEdit]);

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
