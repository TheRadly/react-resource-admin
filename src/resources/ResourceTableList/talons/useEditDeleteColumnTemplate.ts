import { EXCLAMATION_TRIANGLE_ICON } from "../../../staticTexts";
import { confirmPopup } from "primereact/confirmpopup";
import { useCallback } from "react";
import classes from "../../ResourceTableActions/styles/pageActions.scss";

interface UseEditDeleteColumnTemplateProps {
  onClickDelete?: () => void;
  confirmDeleteMessage: string;
}

const useEditDeleteColumnTemplate = ({
  onClickDelete,
  confirmDeleteMessage,
}: UseEditDeleteColumnTemplateProps) => {
  const handleClickDelete = useCallback(
    (event: any) => {
      confirmPopup({
        target: event.target,
        message: confirmDeleteMessage,
        icon: EXCLAMATION_TRIANGLE_ICON,
        accept: onClickDelete,
        acceptClassName: classes.customAccept,
        rejectClassName: classes.customReject,
      });
    },
    [confirmDeleteMessage, onClickDelete]
  );

  return { handleClickDelete };
};

export default useEditDeleteColumnTemplate;
