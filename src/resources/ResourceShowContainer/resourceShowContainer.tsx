import React from "react";
import { DataFieldType } from "../../types/InputEventTypes";
import ResourceShowData from "../ResourceShowData";
import ResourceShowToolbar from "../ResourceShowToolbar";
import ResourceShowContainerWrapper from "./styled/resourceShowContainerWrapper";

interface ResourceShowContainerProps {
  id: string;
  values: DataFieldType[];
  title?: string;
  enabled?: boolean;
  deleteQueryMethod: any;
  afterDeletePushPath: string;
  emptyLabel: string;
  arrayTitle: string;
  editLabel: string;
  deleteLabel: string;
  onDelete: () => void;
  onEdit: () => void;
  deleteConfirmMessage: string;
}

const ResourceShowContainer = ({
  values,
  title,
  enabled,
  emptyLabel,
  arrayTitle,
  editLabel,
  deleteLabel,
  onDelete,
  onEdit,
  deleteConfirmMessage,
}: ResourceShowContainerProps) => (
  <ResourceShowContainerWrapper>
    <ResourceShowToolbar
      editLabel={editLabel}
      deleteLabel={deleteLabel}
      onDelete={onDelete}
      onEdit={onEdit}
      deleteConfirmMessage={deleteConfirmMessage}
      title={title}
      enabled={enabled}
    />
    <ResourceShowData
      arrayTitle={arrayTitle}
      emptyLabel={emptyLabel}
      values={values}
    />
  </ResourceShowContainerWrapper>
);

export default ResourceShowContainer;
