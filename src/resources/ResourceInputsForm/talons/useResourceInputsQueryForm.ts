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
import { DISABLED_IDS } from "../config";

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
      limit: 100,
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
    loading,
    parentType,
    refetchDocument,
    successAction,
    validationOptions,
    externalValues,
  } = useMemo(() => extraFormCruds || {}, [extraFormCruds]);

  const queryOptions = useMemo(
    () =>
      refetchDocument
        ? {
            refetchQueries: [
              { query: refetchDocument, variables: defaultRefetchVariables },
            ],
          }
        : null,
    [refetchDocument]
  );

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
          onCompleted: (args: any) => {
            if (successAction) successAction(args);
          },
        });
      } else {
        createValue({
          variables: {
            input: getCorrectExtraFormSubmitValues(val, parentType),
          },
          onCompleted: (args: any) => {
            if (successAction) successAction(args);
          },
        });
      }

      if (handleCloseQueryContainer) {
        handleCloseQueryContainer();
      }
    },
    [
      item,
      handleCloseQueryContainer,
      updateValue,
      parentType,
      successAction,
      createValue,
    ]
  );

  const formOptions = useMemo(
    () =>
      item
        ? {
            ...validationOptions,
            valuesForEdit: item,
            onSubmitMethod: onSubmitInputs,
            loading,
          }
        : {
            ...validationOptions,
            initialValues,
            onSubmitMethod: onSubmitInputs,
          },
    [initialValues, item, loading, onSubmitInputs, validationOptions]
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
      parsedValues
        .filter((pvFilter) => !DISABLED_IDS.includes(pvFilter.field))
        .map((pv) =>
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
    formHandler,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale,
  };
};

export default useResourceInputsQueryForm;
