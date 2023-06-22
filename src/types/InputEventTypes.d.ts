export type InputEventType = {
    target: {
        value: string | number;
    };
};
export type SelectType = {
    name: string;
    code: string;
};
export type DataFieldType = {
    field: string;
    value: any;
    isArray?: boolean;
    title?: string;
};
