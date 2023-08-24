interface UseArrayOfObjectsInputProps {
    onChange: (arg: any) => void;
    initialValue?: any;
    itemTitledBy?: string;
    values: any[];
}
declare const useArrayOfObjectsInput: ({ initialValue, values, itemTitledBy, onChange, }: UseArrayOfObjectsInputProps) => {
    arrayOfFields: any;
    arrayOfItems: any[];
    handleChangeFieldValue: (field: string, data: any) => void;
    handleSetFieldsData: () => void;
    handleRemoveItem: (propIndex: number) => void;
};
export default useArrayOfObjectsInput;
