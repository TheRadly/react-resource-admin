interface UseArrayOfObjectsInputProps {
    onChange: (arg: any) => void;
    initialValue?: any;
    itemTitledBy?: string;
    values: any[];
}
declare const useArrayOfObjectsInput: ({ initialValue, values, itemTitledBy, onChange, }: UseArrayOfObjectsInputProps) => {
    arrayOfFields: any;
    arrayOfItems: string[];
    handleChangeFieldValue: (field: string, data: any) => void;
    handleSetFieldsData: () => void;
};
export default useArrayOfObjectsInput;
