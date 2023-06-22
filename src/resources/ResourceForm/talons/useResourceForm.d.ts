interface UseResourceForm {
    isEdit?: boolean;
    formHandler: {
        setFieldValue: any;
        handleSubmit: any;
    };
    saveLabel?: string;
    createLabel?: string;
}
declare const useResourceForm: ({ isEdit, formHandler, saveLabel, createLabel, }: UseResourceForm) => {
    handleSubmit: any;
    handleChangeField: (value: string | number | boolean, field: string) => void;
    submitButtonLabel: string | undefined;
};
export default useResourceForm;
