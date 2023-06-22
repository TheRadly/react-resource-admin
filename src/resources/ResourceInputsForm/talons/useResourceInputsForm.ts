import { useCallback, useState } from "react";

const useResourceInputsForm = () => {
  const [isShowQueryContainer, setShowQueryContainer] =
    useState<boolean>(false);
  const [queryFormItem, setQueryFormItem] = useState<any>(null);

  const handleShowQueryContainer = useCallback(
    (item: any) => {
      if (item) {
        setQueryFormItem(item);
      }
      setShowQueryContainer((prev) => !prev);
    },
    [setQueryFormItem, setShowQueryContainer]
  );

  const handleCloseQueryContainer = useCallback(() => {
    setShowQueryContainer(false);
  }, [setShowQueryContainer]);

  return {
    handleCloseQueryContainer,
    queryFormItem,
    isShowQueryContainer,
    handleShowQueryContainer,
  };
};

export default useResourceInputsForm;
