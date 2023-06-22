interface UseEditDeleteColumnTemplateProps {
    onClickDelete?: () => void;
    confirmDeleteMessage: string;
}
declare const useEditDeleteColumnTemplate: ({ onClickDelete, confirmDeleteMessage, }: UseEditDeleteColumnTemplateProps) => {
    handleClickDelete: (event: any) => void;
};
export default useEditDeleteColumnTemplate;
