interface UseInputFieldsWithQueryProps {
    isShowQueryContainer?: boolean;
    closeTooltipLabel?: string;
    addTooltipLabel?: string;
}
declare const useInputFieldsWithQuery: ({ isShowQueryContainer, closeTooltipLabel, addTooltipLabel, }: UseInputFieldsWithQueryProps) => {
    buttonIcon: string;
    tooltipLocale: string | undefined;
};
export default useInputFieldsWithQuery;
