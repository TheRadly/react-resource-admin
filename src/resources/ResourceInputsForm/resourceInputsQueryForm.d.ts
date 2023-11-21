import React from "react";
import type { CrudType } from "./models/CrudType";
interface ResourceCrudQueryFormProps {
    extraFormCruds: CrudType;
    children?: React.ReactNode;
    item?: any;
    handleCloseQueryContainer?: () => void;
    saveLabel?: string;
    createLabel?: string;
    mainFullWidth?: boolean;
}
declare const _default: React.MemoExoticComponent<({ extraFormCruds, children, item, handleCloseQueryContainer, saveLabel, createLabel, mainFullWidth, }: ResourceCrudQueryFormProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
