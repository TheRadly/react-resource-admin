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
};
