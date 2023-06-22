import { ID, TYPENAME } from "../staticTexts";
import { SetStateAction } from "react";

const typenameIdFilter = (
  obj: any,
  extraValues?: string[]
): SetStateAction<any> => {
  let newObject = {} as SetStateAction<any>;

  const objectEntries = Object.entries(obj);

  for (let [key, value] of objectEntries) {
    if (key !== ID && key !== TYPENAME && !extraValues?.includes(key)) {
      // @ts-ignore
      newObject = {
        ...newObject,
        [key]: value,
      };
    }
  }

  return newObject;
};

export default typenameIdFilter;
