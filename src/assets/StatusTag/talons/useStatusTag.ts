import { TagProps } from "primereact/tag";
import { useMemo } from "react";
import { DANGER_SEVERITY, INFO_SEVERITY } from "../../../staticTexts";

interface UseStatusTagProps {
  enabled?: boolean;
  tagSeverity?: TagProps["severity"];
  isCustom?: boolean;
  tagValue?: string;
  enabledLabel?: string;
  disabledLabel?: string;
}

const useStatusTag = ({
  enabled,
  tagSeverity,
  isCustom,
  tagValue,
  enabledLabel,
  disabledLabel,
}: UseStatusTagProps) => {
  const customSeverity = useMemo(
    () => tagSeverity || INFO_SEVERITY,
    [tagSeverity]
  );

  const enabledValue = useMemo(
    () => (enabled ? enabledLabel : disabledLabel),
    [enabled, enabledLabel, disabledLabel]
  );

  const enabledSeverity = useMemo(
    () => (enabled ? INFO_SEVERITY : DANGER_SEVERITY),
    [enabled]
  );

  return {
    severity: isCustom ? customSeverity : enabledSeverity,
    value: isCustom ? tagValue : enabledValue,
  };
};

export default useStatusTag;
