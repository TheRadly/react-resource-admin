import React from "react";
import { DataFieldType } from "../../types/InputEventTypes";
import ResourceShowDataWrapper from "./styled/resourceShowDataWrapper";
import ShowField from "../../assets/ShowField";

interface ResourceShowDataProps {
  values: DataFieldType[];
  emptyLabel: string;
  arrayTitle: string;
}

const ResourceShowData = ({
  values,
  emptyLabel,
  arrayTitle,
}: ResourceShowDataProps) => (
  <ResourceShowDataWrapper>
    {values.map((item: DataFieldType) => (
      <ShowField
        arrayTitle={arrayTitle}
        emptyLabel={emptyLabel}
        label={item.field}
        key={item.field}
        item={item}
      />
    ))}
  </ResourceShowDataWrapper>
);

export default ResourceShowData;
