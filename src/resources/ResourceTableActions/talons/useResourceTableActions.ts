import { ButtonProps } from "primereact/button";
import { ResourceTableActionsProps } from "../models/ResourceTableActionsProps";
import { confirmPopup } from "primereact/confirmpopup";
import { useCallback } from "react";
import {
  CANCEL_ICON,
  CHECK_ICON,
  EXCLAMATION_TRIANGLE_ICON,
  POSITIONS,
  SEARCH_ICON,
  SMALL_SIZE,
  TRASH_ICON,
} from "../../../staticTexts";

type UseResourceTableActions = Omit<
  ResourceTableActionsProps,
  | "handleChangeSelectMode"
  | "handleChangeSearchMode"
  | "handleCreateButton"
  | "handleChangeEditable"
>;

const useResourceTableActions = ({
  selectedValues,
  handleDeleteClick,
  isSelectable,
  isDisplaySearch,
  classes,
  deleteConfirmMessage,
  disabledTooltipDeleteLabel,
}: UseResourceTableActions) => {
  const isValuesSelected = !!selectedValues?.length;

  const onConfirmClick = useCallback(
    (event: any) => {
      confirmPopup({
        target: event.target,
        message: deleteConfirmMessage,
        icon: EXCLAMATION_TRIANGLE_ICON,
        accept: handleDeleteClick,
        acceptClassName: classes.customAccept,
        rejectClassName: classes.customReject,
      });
    },
    [classes, handleDeleteClick, deleteConfirmMessage]
  );

  const deleteButtonProps = {
    tooltipOptions: { showOnDisabled: true, position: POSITIONS.LEFT },
    disabled: !isValuesSelected,
    icon: TRASH_ICON,
    onClick: onConfirmClick,
    size: SMALL_SIZE,
    className: classes.outlined,
  } as ButtonProps;

  const tooltipExtraButtonProps = isValuesSelected
    ? { ...deleteButtonProps }
    : {
        ...deleteButtonProps,
        tooltip: disabledTooltipDeleteLabel,
      };

  const selectIcon = isSelectable ? CANCEL_ICON : CHECK_ICON;
  const searchIcon = isDisplaySearch ? CANCEL_ICON : SEARCH_ICON;

  return {
    searchIcon,
    tooltipExtraButtonProps,
    selectIcon,
  };
};

export default useResourceTableActions;
