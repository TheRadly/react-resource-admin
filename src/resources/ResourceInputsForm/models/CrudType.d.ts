export type CrudType = {
    createQuery: any;
    updateQuery: any;
    deleteQuery?: any;
    refetch: any;
    generateTypeName: string;
    name: string;
    successLocale: string;
    id?: string;
    deleteConfirmMessage?: string;
};
