import React from "react";
import { Button } from "primereact/button";
import LoaderSpinner from "../../assets/LoaderSpinner";
import UniversalInput from "../../assets/UniversalInput";
import type { CrudType } from "./models/CrudType";
import ButtonsWrapper from "../ResourceForm/styled/buttonsWrapper";
import ResourceCrudFormWrapper from "../ResourceForm/styled/resourceInputsFormWrapper";
import useResourceCrudQueryForm from "./talons/useResourceInputsQueryForm";
import { SUBMIT_INPUT } from "../../staticTexts";
import { memo } from "react";

interface ResourceCrudQueryFormProps {
  extraFormCruds: CrudType;
  children?: React.ReactNode;
  item?: any;
  handleCloseQueryContainer?: () => void;
  saveLabel?: string;
  createLabel?: string;
  mainFullWidth?: boolean;
}

const ResourceCrudQueryForm = ({
  extraFormCruds,
  children,
  item,
  handleCloseQueryContainer,
  saveLabel,
  createLabel,
  mainFullWidth,
}: ResourceCrudQueryFormProps) => {
  const {
    loading,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale,
    formHandler,
  } = useResourceCrudQueryForm({
    extraFormCruds,
    saveLabel,
    createLabel,
    item,
    handleCloseQueryContainer,
  });

  return loading ? (
    <LoaderSpinner />
  ) : (
    <ResourceCrudFormWrapper onSubmit={handleSubmit}>
      {children ||
        arrayOfValues.map(
          ({
            field,
            value,
            activeValue,
            isArray,
            isDisabled,
            isDate,
            isFloat,
            isArrayWithObject,
            initialValue,
            itemTitledBy,
            emptyLabel,
            isCurrencies,
          }) => (
            <UniversalInput
              error={formHandler.errors[field] as any}
              fullWidth={mainFullWidth}
              isDate={isDate}
              initialValue={initialValue}
              itemTitledBy={itemTitledBy}
              emptyLabel={emptyLabel}
              isArrayWithObjects={isArrayWithObject}
              isDisabled={isDisabled}
              isArray={isArray}
              label={field}
              currentOption={activeValue}
              isFloat={isFloat}
              disabled={loading}
              isCurrencies={isCurrencies}
              value={value}
              onChange={(data) => handleChangeField(data, field)}
            />
          )
        )}
      <ButtonsWrapper>
        <Button loading={loading} type={SUBMIT_INPUT}>
          {submitLocale}
        </Button>
      </ButtonsWrapper>
    </ResourceCrudFormWrapper>
  );
};

export default memo(ResourceCrudQueryForm);
