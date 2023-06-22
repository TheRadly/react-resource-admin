import { CANCEL_ICON, PLUS_ICON } from "../../../staticTexts";
import { useMemo } from "react";

interface UseInputFieldsWithQueryProps {
  isShowQueryContainer?: boolean;
  closeTooltipLabel?: string;
  addTooltipLabel?: string;
}

const useInputFieldsWithQuery = ({
  isShowQueryContainer,
  closeTooltipLabel,
  addTooltipLabel,
}: UseInputFieldsWithQueryProps) => {
  const tooltipLocale = useMemo(
    () => (isShowQueryContainer ? closeTooltipLabel : addTooltipLabel),
    [isShowQueryContainer, closeTooltipLabel, addTooltipLabel]
  );

  const buttonIcon = useMemo(
    () => (isShowQueryContainer ? CANCEL_ICON : PLUS_ICON),
    [isShowQueryContainer]
  );

  return { buttonIcon, tooltipLocale };
};

export default useInputFieldsWithQuery;
