interface ResourceShowToolbarProps {
    title?: string;
    enabled?: boolean;
    editLabel: string;
    deleteLabel: string;
    onDelete: () => void;
    onEdit: () => void;
    deleteConfirmMessage: string;
}
declare const ResourceShowToolbar: ({ title, enabled, editLabel, deleteLabel, onDelete, onEdit, deleteConfirmMessage, }: ResourceShowToolbarProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceShowToolbar;
