import { useCallback } from "react";
import { EXCLAMATION_TRIANGLE_ICON } from "../../../staticTexts";
import parseFormValues from "../../../utils/parseFormValues";
import typenameIdFilter from "../../../utils/typenameIdFilter";
import { confirmPopup } from "primereact/confirmpopup";
import { CrudType } from "../../../resources/ResourceInputsForm/models/CrudType";

import classes from "../../../resources/ResourceTableActions/styles/pageActions.scss";

interface UseInputFieldProps {
  item: any;
  fieldsToExclude?: string[];
  extraFormCruds?: CrudType;
}

const useInputField = ({
  item,
  fieldsToExclude,
  extraFormCruds,
}: UseInputFieldProps) => {
  const { deleteQuery, deleteConfirmMessage, refetchDocument } =
    extraFormCruds || {};
  const fields = parseFormValues(typenameIdFilter(item, fieldsToExclude));

  const [handleDeleteValues] = deleteQuery();

  const onClickDelete = useCallback(() => {
    handleDeleteValues({
      variables: {
        input: {
          ids: [item.id],
        },
      },
      ...(refetchDocument
        ? {
            refetchQueries: [
              {
                query: refetchDocument,
                variables: { input: { pagination: { page: 0, limit: 100 } } },
              },
            ],
          }
        : null),
    });
  }, [refetchDocument, handleDeleteValues, item]);

  const handleDeleteItem = useCallback(
    (event: any) => {
      confirmPopup({
        target: event.target,
        message: deleteConfirmMessage,
        icon: EXCLAMATION_TRIANGLE_ICON,
        accept: onClickDelete,
        acceptClassName: classes.customAccept,
        rejectClassName: classes.customReject,
      });
    },
    [deleteConfirmMessage, onClickDelete]
  );

  return { fields, handleDeleteItem };
};

export default useInputField;
