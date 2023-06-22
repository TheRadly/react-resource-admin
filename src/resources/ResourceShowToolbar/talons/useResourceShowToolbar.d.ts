interface UseResourceShowToolbarProps {
    onDelete: () => void;
    deleteConfirmMessage: string;
}
declare const useResourceShowToolbar: ({ onDelete, deleteConfirmMessage, }: UseResourceShowToolbarProps) => {
    handleConfirmDelete: (event: any) => void;
};
export default useResourceShowToolbar;
