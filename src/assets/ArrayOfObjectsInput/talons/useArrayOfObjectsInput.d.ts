interface UseArrayOfObjectsInputProps {
    onChange: (arg: any) => void;
    initialValue?: any;
    itemTitledBy?: string;
    values: any[];
}
declare const useArrayOfObjectsInput: ({ initialValue, values, itemTitledBy, onChange, }: UseArrayOfObjectsInputProps) => {
    isEditMode: boolean;
    arrayOfFields: any;
    arrayOfItems: any[];
    handleChangeFieldValue: (field: string, data: any) => void;
    handleSetFieldsData: () => void;
    handleSetEditedFieldData: () => void;
    handleRemoveItem: (propIndex: number) => void;
    handleEditItem: (item: any, index: number) => void;
};
export default useArrayOfObjectsInput;
