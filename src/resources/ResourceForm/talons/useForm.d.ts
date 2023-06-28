/// <reference types="react" />
interface UseFormProps {
    initialValues?: any;
    onSubmitMethod: any;
}
declare const useForm: ({ initialValues, onSubmitMethod }: UseFormProps) => {
    formHandler: {
        initialValues: any;
        initialErrors: import("formik").FormikErrors<unknown>;
        initialTouched: import("formik").FormikTouched<unknown>;
        initialStatus: any;
        handleBlur: {
            (e: import("react").FocusEvent<any, Element>): void;
            <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
        };
        handleChange: {
            (e: import("react").ChangeEvent<any>): void;
            <T_1 = string | import("react").ChangeEvent<any>>(field: T_1): T_1 extends import("react").ChangeEvent<any> ? void : (e: string | import("react").ChangeEvent<any>) => void;
        };
        handleReset: (e: any) => void;
        handleSubmit: (e?: import("react").FormEvent<HTMLFormElement> | undefined) => void;
        resetForm: (nextState?: Partial<import("formik").FormikState<any>> | undefined) => void;
        setErrors: (errors: import("formik").FormikErrors<any>) => void;
        setFormikState: (stateOrCb: import("formik").FormikState<any> | ((state: import("formik").FormikState<any>) => import("formik").FormikState<any>)) => void;
        setFieldTouched: (field: string, touched?: boolean | undefined, shouldValidate?: boolean | undefined) => Promise<void> | Promise<import("formik").FormikErrors<any>>;
        setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<import("formik").FormikErrors<any>>;
        setFieldError: (field: string, value: string | undefined) => void;
        setStatus: (status: any) => void;
        setSubmitting: (isSubmitting: boolean) => void;
        setTouched: (touched: import("formik").FormikTouched<any>, shouldValidate?: boolean | undefined) => Promise<void> | Promise<import("formik").FormikErrors<any>>;
        setValues: (values: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<import("formik").FormikErrors<any>>;
        submitForm: () => Promise<any>;
        validateForm: (values?: any) => Promise<import("formik").FormikErrors<any>>;
        validateField: (name: string) => Promise<void> | Promise<string | undefined>;
        isValid: boolean;
        dirty: boolean;
        unregisterField: (name: string) => void;
        registerField: (name: string, { validate }: any) => void;
        getFieldProps: (nameOrOptions: string | import("formik").FieldConfig<any>) => import("formik").FieldInputProps<any>;
        getFieldMeta: (name: string) => import("formik").FieldMetaProps<any>;
        getFieldHelpers: (name: string) => import("formik").FieldHelperProps<any>;
        validateOnBlur: boolean;
        validateOnChange: boolean;
        validateOnMount: boolean;
        values: any;
        errors: import("formik").FormikErrors<any>;
        touched: import("formik").FormikTouched<any>;
        isSubmitting: boolean;
        isValidating: boolean;
        status?: any;
        submitCount: number;
    };
    formValues: any;
    values: {
        field: string;
        value: any;
    }[];
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<import("formik").FormikErrors<any>>;
    handleChangeField: (value: string | number | boolean, field: string) => void;
    handleSubmit: (e?: import("react").FormEvent<HTMLFormElement> | undefined) => void;
};
export default useForm;
