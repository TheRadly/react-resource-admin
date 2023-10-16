import { useCallback, useEffect, useMemo } from "react";
import type { CrudType } from "../models/CrudType";
import { FieldsType } from "../models/FieldsType";
import useForm from "../../ResourceForm/talons/useForm";
import {
  BONUS_ID,
  CASHBACK_PERCENT,
  DEPOSIT_LIMIT,
  LOYALITY_LEVEL_ID,
  LOYALTY_LEVEL,
  LOYALTY_LEVEL_REWARD_TYPES,
  LoyaltyRewardTypeEnums,
  TYPE,
  WITHDRAW_LIMIT,
} from "../config";
import { has } from "lodash";
import {
  getCorrectExtraFormSubmitValues,
  removeExtraFormItemId,
} from "../helpers";

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
    createQuery,
    updateQuery,
    id,
    loading,
    parentType,
    refetchDocument,
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
              data: removeExtraFormItemId(
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
    [updateValue, createValue, item, id, handleCloseQueryContainer, parentType]
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

  useEffect(() => {
    if (parentType && parentType === LOYALTY_LEVEL) {
      if (
        formValues?.type === LOYALTY_LEVEL_REWARD_TYPES.BONUS &&
        !has(formValues, BONUS_ID)
      ) {
        formHandler.setFieldValue(BONUS_ID, item?.bonusId || "");
      } else if (
        formValues?.type !== LOYALTY_LEVEL_REWARD_TYPES.BONUS &&
        has(formValues, BONUS_ID)
      ) {
        formHandler.setFieldValue(BONUS_ID, undefined);
      }

      if (
        formValues?.type === LOYALTY_LEVEL_REWARD_TYPES.CASHBACK &&
        !has(formValues, CASHBACK_PERCENT)
      ) {
        formHandler.setFieldValue(
          CASHBACK_PERCENT,
          item?.cashbackPercent || ""
        );
      } else if (
        formValues?.type !== LOYALTY_LEVEL_REWARD_TYPES.CASHBACK &&
        has(formValues, CASHBACK_PERCENT)
      ) {
        formHandler.setFieldValue(CASHBACK_PERCENT, undefined);
      }

      if (
        formValues?.type === LOYALTY_LEVEL_REWARD_TYPES.DEPOSIT_LIMIT &&
        !has(formValues, DEPOSIT_LIMIT)
      ) {
        formHandler.setFieldValue(DEPOSIT_LIMIT, item?.depositLimit || "");
      } else if (
        formValues?.type !== LOYALTY_LEVEL_REWARD_TYPES.DEPOSIT_LIMIT &&
        has(formValues, DEPOSIT_LIMIT)
      ) {
        formHandler.setFieldValue(DEPOSIT_LIMIT, undefined);
      }

      if (
        formValues?.type === LOYALTY_LEVEL_REWARD_TYPES.WITHDRAW_LIMIT &&
        !has(formValues, WITHDRAW_LIMIT)
      ) {
        formHandler.setFieldValue(WITHDRAW_LIMIT, item?.withdrawLimit || "");
      } else if (
        formValues?.type !== LOYALTY_LEVEL_REWARD_TYPES.WITHDRAW_LIMIT &&
        has(formValues, WITHDRAW_LIMIT)
      ) {
        formHandler.setFieldValue(WITHDRAW_LIMIT, undefined);
      }
    }
  }, [
    parentType,
    formValues,
    item?.bonusId,
    item?.cashbackPercent,
    item?.depositLimit,
    item?.withdrawLimit,
  ]);

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
        if (parentType === LOYALTY_LEVEL) {
          if (pv.field === TYPE) {
            const dropdownTypeValues = Object.keys(LoyaltyRewardTypeEnums).map(
              (key) => ({
                name: key,
                // @ts-ignore
                code: LoyaltyRewardTypeEnums[key],
              })
            );

            return {
              ...pv,
              ...(item
                ? {
                    activeValue: {
                      // @ts-ignore
                      name: dropdownTypeValues.find(
                        (value) => value.code === pv.value
                      )?.name,
                      code: pv.value,
                    },
                  }
                : null),
              value: dropdownTypeValues,
            };
          } else if (
            pv.field === CASHBACK_PERCENT ||
            pv.field === DEPOSIT_LIMIT ||
            pv.field === WITHDRAW_LIMIT
          ) {
            return item
              ? {
                  ...pv,
                  isFloat: true,
                  value:
                    typeof pv.value === "string"
                      ? pv.value
                      : pv.value?.toString() || "",
                }
              : {
                  ...pv,
                  isFloat: true,
                };
          } else if (pv.field === LOYALITY_LEVEL_ID) {
            return {
              ...item,
              isDisabled: true,
            };
          }
        }

        return pv;
      }),
    [parsedValues, parentType, item]
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
