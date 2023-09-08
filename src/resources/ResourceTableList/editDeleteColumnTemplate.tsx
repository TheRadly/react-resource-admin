import {
  COPY_ICON,
  EDIT_ICON,
  SMALL_SIZE,
  TRASH_ICON,
} from "../../staticTexts";
import { Button } from "primereact/button";
import EditColumnWrapper from "./styled/editColumnWrapper";
import { ConfirmPopup } from "primereact/confirmpopup";
import useEditDeleteColumnTemplate from "./talons/useEditDeleteColumnTemplate";

interface EditDeleteColumnTemplateProps {
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickClone?: () => void;
  hideClone?: boolean;
  confirmDeleteMessage: string;
}

const EditDeleteColumnTemplate = ({
  onClickEdit,
  onClickDelete,
  onClickClone,
  hideClone,
  confirmDeleteMessage,
}: EditDeleteColumnTemplateProps) => {
  const { handleClickDelete } = useEditDeleteColumnTemplate({
    onClickDelete,
    confirmDeleteMessage,
  });

  return (
    <>
      <ConfirmPopup />
      <EditColumnWrapper>
        <Button
          onClick={onClickEdit}
          size={SMALL_SIZE}
          rounded
          icon={EDIT_ICON}
        />
        {!hideClone && (
          <Button
            onClick={onClickClone}
            size={SMALL_SIZE}
            rounded
            icon={COPY_ICON}
          />
        )}
        <Button
          onClick={handleClickDelete}
          size={SMALL_SIZE}
          rounded
          icon={TRASH_ICON}
        />
      </EditColumnWrapper>
    </>
  );
};

export default EditDeleteColumnTemplate;
