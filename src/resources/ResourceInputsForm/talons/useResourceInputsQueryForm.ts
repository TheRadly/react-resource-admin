import { useCallback, useMemo } from "react";
import type { CrudType } from "../models/CrudType";
import { FieldsType } from "../models/FieldsType";
import useForm from "../../ResourceForm/talons/useForm";

interface UseResourceInputsQueryForm {
  extraFormCruds: CrudType;
  item?: any;
  handleCloseQueryContainer?: () => void;
  filterItems?: FieldsType[];
}

const useResourceInputsQueryForm = ({
  extraFormCruds,
  item,
  handleCloseQueryContainer,
  filterItems,
}: UseResourceInputsQueryForm) => {
  const {
    initialValues,
    createQuery,
    updateQuery,
    id,
    loading,
    saveLabel,
    createLabel,
  } = useMemo(() => extraFormCruds || {}, [extraFormCruds]);

  const [createValue, { loading: createLoading }] = createQuery();
  const [updateValue, { loading: updateLoading }] = updateQuery();

  const onSubmitInputs = useCallback(
    (val: any) => {
      if (item) {
        updateValue({
          variables: {
            input: {
              id,
              update: {
                ...val,
              },
            },
          },
        });
      } else {
        createValue({
          variables: {
            input: val,
          },
        });
      }

      if (handleCloseQueryContainer) {
        handleCloseQueryContainer();
      }
    },
    [updateValue, createValue, item, id, handleCloseQueryContainer]
  );

  const formOptions = useMemo(
    () =>
      item
        ? {
            valuesForEdit: item,
            onSubmitMethod: onSubmitInputs,
            loading,
          }
        : {
            initialValues,
            onSubmitMethod: onSubmitInputs,
          },
    [initialValues, item, loading, onSubmitInputs]
  );

  const { handleSubmit, setFieldValue, formValues } = useForm(formOptions);

  const parsedValues = useMemo(
    () =>
      Object.keys(formValues).map((field) => ({
        field,
        value: formValues[field],
      })),
    [formValues]
  );

  const arrayOfValues = useMemo(
    () =>
      parsedValues.map((pv) => {
        const item = filterItems?.find((item) => item.field === pv.field);

        if (item) {
          return {
            ...pv,
            ...item,
          };
        }

        return pv;
      }),
    [filterItems, parsedValues]
  ) as FieldsType[];

  const handleChangeField = useCallback(
    (value: string | number | boolean, field: string) => {
      setFieldValue(field, value);
    },
    [setFieldValue]
  );

  const submitLocale = useMemo(
    () => (item ? saveLabel : createLabel),
    [item, saveLabel, createLabel]
  );

  return {
    loading: createLoading || updateLoading,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale,
  };
};

export default useResourceInputsQueryForm;
