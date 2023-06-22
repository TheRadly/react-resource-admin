import { useCallback, useState } from "react";

const useResourceTableToolbar = () => {
  const [isDisplaySearch, setDisplaySearch] = useState<boolean>(false);

  const handleChangeSearchMode = useCallback(() => {
    setDisplaySearch((prev) => !prev);
  }, [setDisplaySearch]);

  return {
    isDisplaySearch,
    handleChangeSearchMode,
  };
};

export default useResourceTableToolbar;
