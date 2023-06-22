import { useCallback, useEffect, useMemo } from "react";
import type { CrudType } from "../models/CrudType";
import { FieldsType } from "../models/FieldsType";
import typenameIdFilter from "../../../utils/typenameIdFilter";
import useForm from "../../ResourceForm/talons/useForm";

interface UseResourceInputsQueryForm {
  extraFormCruds: CrudType;
  item?: any;
  handleCloseQueryContainer?: () => void;
  filterItems?: FieldsType[];
  saveLabel?: string;
  createLabel?: string;
}

const useResourceInputsQueryForm = ({
  extraFormCruds,
  item,
  handleCloseQueryContainer,
  filterItems,
  saveLabel,
  createLabel,
}: UseResourceInputsQueryForm) => {
  const { createQuery, updateQuery, id } = useMemo(
    () => extraFormCruds || {},
    [extraFormCruds]
  );

  const { handleSubmit, setFieldValue, formValues, formHandler } = useForm({
    initialValues: typenameIdFilter({ ...item }),
    onSubmitMethod: (val: any) => onSubmitInputs(val),
  });

  const [createValue, { loading: createLoading }] = createQuery();
  const [updateValue, { loading: updateLoading }] = updateQuery();

  useEffect(() => {
    if (item) {
      const filteredBalance = typenameIdFilter({ ...item });
      formHandler.setValues(filteredBalance, false);
    }
  }, [formHandler, item]);

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
