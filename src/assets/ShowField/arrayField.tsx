import React from "react";
import {
  ArrayFieldWrapper,
  FieldsContainerWrapper,
} from "./styled/arrayFieldWrapper";

interface ArrayFieldProps {
  title?: string;
  values: string[];
}

const ArrayField = ({ title, values }: ArrayFieldProps) => (
  <ArrayFieldWrapper>
    <span>{title}</span>
    <FieldsContainerWrapper>
      {values.map((value) => (
        <p>{value}</p>
      ))}
    </FieldsContainerWrapper>
  </ArrayFieldWrapper>
);

export default ArrayField;
