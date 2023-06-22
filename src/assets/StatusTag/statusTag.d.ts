import { TagProps } from "primereact/tag";
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
declare const StatusTag: ({ enabled, isCustom, tagValue, tagSeverity, enabledLabel, disabledLabel, className, }: StatusTagProps) => import("react/jsx-runtime").JSX.Element;
export default StatusTag;
