import { EXCLAMATION_TRIANGLE_ICON } from "../../../staticTexts";
import { confirmPopup } from "primereact/confirmpopup";
import { useCallback } from "react";
import classes from "../../ResourceTableActions/styles/pageActions.scss";

interface UseResourceShowToolbarProps {
  onDelete: () => void;
  deleteConfirmMessage: string;
}

const useResourceShowToolbar = ({
  onDelete,
  deleteConfirmMessage,
}: UseResourceShowToolbarProps) => {
  const handleConfirmDelete = useCallback(
    (event: any) => {
      confirmPopup({
        target: event.target,
        message: deleteConfirmMessage,
        icon: EXCLAMATION_TRIANGLE_ICON,
        accept: onDelete,
        acceptClassName: classes.customAccept,
        rejectClassName: classes.customReject,
      });
    },
    [onDelete, deleteConfirmMessage]
  );

  return { handleConfirmDelete };
};

export default useResourceShowToolbar;
