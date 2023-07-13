import { ConfirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";
import PageActionsWrapper from "./styled/pageActionsWrapper";
import useResourceTableActions from "./talons/useResourceTableActions";
import { ResourceTableActionsProps } from "./models/ResourceTableActionsProps";
import { PLUS_ICON, SMALL_SIZE } from "../../staticTexts";
import classes from "./styles/pageActions.scss";

const ResourceTableActions = ({
  handleDeleteClick,
  handleChangeSelectMode,
  handleChangeSearchMode,
  handleCreateButton,
  isSelectable,
  isDisplaySearch,
  selectedValues,
  hideSearch,
  createLabel,
  deleteConfirmMessage,
  disabledTooltipDeleteLabel,
  hideCreate,
  hideMultiSelect,
  extraToolbarItem,
}: ResourceTableActionsProps) => {
  const { tooltipExtraButtonProps, selectIcon, searchIcon } =
    useResourceTableActions({
      classes,
      selectedValues,
      handleDeleteClick,
      isSelectable,
      isDisplaySearch,
      createLabel,
      deleteConfirmMessage,
      disabledTooltipDeleteLabel,
    });

  return (
    <PageActionsWrapper>
      <ConfirmPopup />
      {extraToolbarItem ? <>{extraToolbarItem}</> : null}
      {!isSelectable ? (
        <>
          {!hideCreate && (
            <Button
              onClick={handleCreateButton}
              size={SMALL_SIZE}
              icon={PLUS_ICON}
              label={createLabel}
            />
          )}
          {!hideSearch && (
            <Button
              outlined
              onClick={handleChangeSearchMode}
              size={SMALL_SIZE}
              icon={searchIcon}
            />
          )}
        </>
      ) : null}
      {!hideMultiSelect && (
        <Button
          outlined
          size={SMALL_SIZE}
          onClick={handleChangeSelectMode}
          icon={selectIcon}
        />
      )}
      {isSelectable ? (
        <div>
          <Button {...tooltipExtraButtonProps} />
        </div>
      ) : null}
    </PageActionsWrapper>
  );
};

export default ResourceTableActions;
