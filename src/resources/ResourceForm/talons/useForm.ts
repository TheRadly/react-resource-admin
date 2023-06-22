import { useFormik } from "formik";
import { useCallback, useMemo } from "react";
import typenameIdFilter from "../../../utils/typenameIdFilter";

interface UseFormProps {
  initialValues?: any;
  onSubmitMethod: any;
  // valuesToEdit?: any;
  // omitValuesToEdit?: string[];
}

const useForm = ({
  initialValues = null,
  onSubmitMethod,
}: // valuesToEdit,
// omitValuesToEdit,
UseFormProps) => {
  const form = useFormik({
    initialValues: typenameIdFilter(initialValues || {}) as any,
    onSubmit: onSubmitMethod,
  });

  const { values: formValues, setFieldValue, handleSubmit } = form;

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

  // useEffect(() => {
  //   if (valuesToEdit) {
  //     const filteredValues = typenameIdFilter(
  //       { ...valuesToEdit },
  //       omitValuesToEdit && [...omitValuesToEdit]
  //     );
  //     form.setValues(filteredValues);
  //   }
  // }, [form, valuesToEdit, omitValuesToEdit]);

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
