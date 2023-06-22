import React from "react";
import { Button } from "primereact/button";
import ResourceTableTitle from "../ResourceTableTitle";
import StatusTag from "../../assets/StatusTag/statusTag";
import ResourceShowToolbarWrapper from "./styled/resourceShowToolbarWrapper";
import ResourceTitleContainer from "./styled/resourceTitleContainer";
import ResourceActionsContainer from "./styled/resourceActionsContainer";
import useResourceShowToolbar from "./talons/useResourceShowToolbar";
import { ConfirmPopup } from "primereact/confirmpopup";
import { SMALL_SIZE } from "../../staticTexts";

interface ResourceShowToolbarProps {
  title?: string;
  enabled?: boolean;
  editLabel: string;
  deleteLabel: string;
  onDelete: () => void;
  onEdit: () => void;
  deleteConfirmMessage: string;
}

const ResourceShowToolbar = ({
  title,
  enabled,
  editLabel,
  deleteLabel,
  onDelete,
  onEdit,
  deleteConfirmMessage,
}: ResourceShowToolbarProps) => {
  const { handleConfirmDelete } = useResourceShowToolbar({
    onDelete,
    deleteConfirmMessage,
  });

  return (
    <ResourceShowToolbarWrapper>
      <ConfirmPopup />
      <ResourceTitleContainer>
        <ResourceTableTitle>{title}</ResourceTableTitle>
        {enabled && <StatusTag isCustom={false} enabled={!!enabled} />}
      </ResourceTitleContainer>
      <ResourceActionsContainer>
        <Button size={SMALL_SIZE} label={editLabel} onClick={onEdit} />
        <Button
          size={SMALL_SIZE}
          label={deleteLabel}
          onClick={handleConfirmDelete}
        />
      </ResourceActionsContainer>
    </ResourceShowToolbarWrapper>
  );
};

export default ResourceShowToolbar;
