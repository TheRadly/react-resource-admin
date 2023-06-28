/// <reference types="react" />
import { DataFieldType } from "../../types/InputEventTypes";
interface ShowFieldProps {
    item: DataFieldType;
    label: string;
    arrayTitle: string;
    emptyLabel: string;
}
declare const _default: import("react").MemoExoticComponent<({ item, label, arrayTitle, emptyLabel }: ShowFieldProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
