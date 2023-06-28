interface UseResourceForm {
    isEdit?: boolean;
    formHandler: {
        setFieldValue: any;
        handleSubmit: any;
    };
    saveLabel?: string;
    createLabel?: string;
    handleChangeField?: (data: string, field: string | number | boolean) => void;
}
declare const useResourceForm: ({ isEdit, formHandler, saveLabel, createLabel, handleChangeField, }: UseResourceForm) => {
    handleSubmit: any;
    handleSetFieldValue: (value: string | number | boolean, field: string) => void;
    submitButtonLabel: string | undefined;
};
export default useResourceForm;
