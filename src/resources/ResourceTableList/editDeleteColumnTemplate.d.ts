interface EditDeleteColumnTemplateProps {
    onClickEdit?: () => void;
    onClickDelete?: () => void;
    onClickClone?: () => void;
    hideClone?: boolean;
    confirmDeleteMessage: string;
}
declare const EditDeleteColumnTemplate: ({ onClickEdit, onClickDelete, onClickClone, hideClone, confirmDeleteMessage, }: EditDeleteColumnTemplateProps) => import("react/jsx-runtime").JSX.Element;
export default EditDeleteColumnTemplate;
