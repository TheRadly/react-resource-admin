import { TagProps } from "primereact/tag";
interface UseStatusTagProps {
    enabled?: boolean;
    tagSeverity?: TagProps["severity"];
    isCustom?: boolean;
    tagValue?: string;
    enabledLabel?: string;
    disabledLabel?: string;
}
declare const useStatusTag: ({ enabled, tagSeverity, isCustom, tagValue, enabledLabel, disabledLabel, }: UseStatusTagProps) => {
    severity: "info" | "success" | "danger" | "warning";
    value: string | undefined;
};
export default useStatusTag;
