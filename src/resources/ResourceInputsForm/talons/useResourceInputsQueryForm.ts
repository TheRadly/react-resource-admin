import { useCallback, useEffect, useMemo } from "react";
import type { CrudType } from "../models/CrudType";
import useForm from "../../ResourceForm/talons/useForm";
import {
  customizeFieldInputs,
  getCorrectExtraFormSubmitValues,
  prepareDynamicalFieldsByFormType,
  removeExtraFormItemId,
} from "../helpers";
import { FieldsType } from "../models/FieldsType";

interface UseResourceInputsQueryForm {
  extraFormCruds: CrudType;
  item?: any;
  handleCloseQueryContainer?: () => void;
  saveLabel?: string;
  createLabel?: string;
}

const defaultRefetchVariables = {
  input: {
    pagination: {
      page: 0,
      limit: 10,
    },
  },
};

const useResourceInputsQueryForm = ({
  extraFormCruds,
  item,
  handleCloseQueryContainer,
  saveLabel,
  createLabel,
}: UseResourceInputsQueryForm) => {
  const {
    initialValues,
    dynamicalInputs,
    createQuery,
    updateQuery,
    id,
    loading,
    parentType,
    refetchDocument,
    externalValues,
  } = useMemo(() => extraFormCruds || {}, [extraFormCruds]);

  const queryOptions = refetchDocument
    ? {
        refetchQueries: [
          { query: refetchDocument, variables: defaultRefetchVariables },
        ],
      }
    : null;

  const [createValue, { loading: createLoading }] = createQuery(queryOptions);
  const [updateValue, { loading: updateLoading }] = updateQuery(queryOptions);

  const onSubmitInputs = useCallback(
    (val: any) => {
      if (item) {
        updateValue({
          variables: {
            input: {
              id: item?.id,
              update: removeExtraFormItemId(
                getCorrectExtraFormSubmitValues(val, parentType),
                parentType
              ),
            },
          },
        });
      } else {
        createValue({
          variables: {
            input: getCorrectExtraFormSubmitValues(val, parentType),
          },
        });
      }

      if (handleCloseQueryContainer) {
        handleCloseQueryContainer();
      }
    },
    [updateValue, createValue, item, handleCloseQueryContainer, parentType]
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

  const { handleSubmit, setFieldValue, formValues, formHandler } =
    useForm(formOptions);

  // Handle dynamical fields for some forms
  useEffect(() => {
    prepareDynamicalFieldsByFormType({
      parentType,
      dynamicalInputs,
      formHandler,
      formValues,
      item,
    });
  }, [parentType, formValues, dynamicalInputs, item]);

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
      parsedValues.map((pv) =>
        customizeFieldInputs({ pv, parentType, item, externalValues })
      ),
    [parsedValues, parentType, item, externalValues]
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
