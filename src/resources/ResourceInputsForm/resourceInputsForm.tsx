import React from "react";
import useResourceInputsForm from "./talons/useResourceInputsForm";
import PageTitle from "../ResourceTableTitle/resourceTableTitle";
import PageTitleWrapper from "./styled/pageTitleWrapper";
import InputsFormWrapper from "./styled/crudWrapper";
import ResourceInputsContainer from "./styled/resourceInputsContainer";
import type { CrudType } from "./models/CrudType";
import ResourceCrudQueryForm from "./resourceInputsQueryForm";
import { FieldsType } from "./models/FieldsType";
import ResourceForm from "../ResourceForm/resourceForm";
import { memo } from "react";

interface ResourceInputsFormProps {
  title: string;
  onCancel: any;
  loading: boolean;
  children?: React.ReactNode;
  isEdit?: boolean;
  values: Array<FieldsType>;
  isCustomInputs?: boolean;
  extraFormCruds?: CrudType;
  valuesToEdit?: any;
  omitValuesToEdit?: string[];
  handleChangeField?: (data: string, field: string | number | boolean) => void;
  formHandler: any;
  cancelLabel: string;
  saveLabel?: string;
  createLabel?: string;
  propsIsShowQueryContainer?: boolean;
}

const ResourceInputsForm = ({
  cancelLabel,
  saveLabel,
  createLabel,
  title,
  children,
  onCancel,
  loading,
  isEdit,
  values,
  extraFormCruds,
  handleChangeField,
  formHandler,
  propsIsShowQueryContainer,
}: ResourceInputsFormProps) => {
  const {
    queryFormItem,
    isShowQueryContainer,
    handleShowQueryContainer,
    handleCloseQueryContainer,
  } = useResourceInputsForm();

  return (
    <InputsFormWrapper>
      <PageTitleWrapper>
        <PageTitle>{title}</PageTitle>
      </PageTitleWrapper>
      <ResourceInputsContainer
        isDoubleDisplay={isShowQueryContainer || propsIsShowQueryContainer}
      >
        <ResourceForm
          mainFullWidth={isShowQueryContainer || propsIsShowQueryContainer}
          cancelLabel={cancelLabel}
          saveLabel={saveLabel}
          createLabel={createLabel}
          handleChangeField={handleChangeField}
          formHandler={formHandler}
          extraFormCruds={extraFormCruds}
          loading={loading}
          values={values}
          isEdit={isEdit}
          isShowQueryContainer={isShowQueryContainer}
          handleShowQueryContainer={handleShowQueryContainer}
          onCancel={onCancel}
        >
          {children}
        </ResourceForm>
        {(isShowQueryContainer || propsIsShowQueryContainer) &&
          extraFormCruds && (
            <ResourceCrudQueryForm
              mainFullWidth
              item={queryFormItem}
              extraFormCruds={extraFormCruds}
              handleCloseQueryContainer={handleCloseQueryContainer}
            />
          )}
      </ResourceInputsContainer>
    </InputsFormWrapper>
  );
};

export default memo(ResourceInputsForm);
