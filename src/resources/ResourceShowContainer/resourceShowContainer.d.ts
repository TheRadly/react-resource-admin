import { DataFieldType } from "../../types/InputEventTypes";
interface ResourceShowContainerProps {
    id: string;
    values: DataFieldType[];
    title?: string;
    enabled?: boolean;
    deleteQueryMethod: any;
    afterDeletePushPath: string;
    emptyLabel: string;
    arrayTitle: string;
    editLabel: string;
    deleteLabel: string;
    onDelete: () => void;
    onEdit: () => void;
    deleteConfirmMessage: string;
}
declare const ResourceShowContainer: ({ values, title, enabled, emptyLabel, arrayTitle, editLabel, deleteLabel, onDelete, onEdit, deleteConfirmMessage, }: ResourceShowContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceShowContainer;
