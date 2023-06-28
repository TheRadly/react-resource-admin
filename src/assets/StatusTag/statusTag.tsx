import { Tag, TagProps } from "primereact/tag";
import StatusTagWrapper from "./styled/statusTagWrapper";
import useStatusTag from "./talons/useStatusTag";

interface StatusTagProps {
  enabled?: boolean;
  isCustom?: boolean;
  tagValue?: string;
  withTranslation?: boolean;
  tagSeverity?: TagProps["severity"];
  className?: any;
  enabledLabel?: string;
  disabledLabel?: string;
}

const StatusTag = ({
  enabled,
  isCustom = true,
  tagValue,
  tagSeverity,
  enabledLabel,
  disabledLabel,
  className,
}: StatusTagProps) => {
  const { severity, value } = useStatusTag({
    tagValue,
    isCustom,
    enabled,
    tagSeverity,
    enabledLabel,
    disabledLabel,
  });

  return className ? (
    <Tag className={className} severity={severity} value={value} />
  ) : (
    <StatusTagWrapper>
      <Tag severity={severity} value={value} />
    </StatusTagWrapper>
  );
};

export default StatusTag;
