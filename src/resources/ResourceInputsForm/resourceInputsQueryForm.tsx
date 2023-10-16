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
}

const ResourceCrudQueryForm = ({
  extraFormCruds,
  children,
  item,
  handleCloseQueryContainer,
}: ResourceCrudQueryFormProps) => {
  const {
    loading,
    handleSubmit,
    arrayOfValues,
    handleChangeField,
    submitLocale,
  } = useResourceCrudQueryForm({
    extraFormCruds,
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
          }) => (
            <UniversalInput
              isDate={isDate}
              isDisabled={isDisabled}
              isArray={isArray}
              label={field}
              placeholder={field}
              currentOption={activeValue}
              isFloat={isFloat}
              disabled={loading}
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
