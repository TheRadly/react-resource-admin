export type CrudType = {
    createQuery: any;
    updateQuery: any;
    deleteQuery?: any;
    refetchDocument?: any;
    name: string;
    successLocale: string;
    id?: string;
    deleteConfirmMessage?: string;
    initialValues?: any;
    loading?: boolean;
    parentType?: string;
    dynamicalInputs?: any;
    externalValues?: any;
    successAction?: (args: any) => void;
    validationOptions?: {
        validation?: any;
        validationOnBlur?: boolean;
        validationOnChange?: boolean;
        validationOnMount?: boolean;
    };
};
