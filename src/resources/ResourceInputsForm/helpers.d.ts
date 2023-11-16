export declare const getCorrectExtraFormSubmitValues: (val: any, parentType?: string) => any;
export declare const removeExtraFormItemId: (item: any, parentType?: string) => any;
export declare const prepareDynamicalFieldsByFormType: ({ parentType, dynamicalInputs, formValues, formHandler, item, }: {
    formValues: any;
    parentType?: string | undefined;
    dynamicalInputs?: any;
    formHandler: any;
    item: any;
}) => void;
export declare const customizeFieldInputs: ({ pv, parentType, item, externalValues, }: {
    pv: {
        value: any;
        field: string;
    };
    parentType?: string | undefined;
    item: any;
    externalValues: any;
}) => any;
