import { DataFieldType } from "../types/InputEventTypes";

const parseFormValues = (values: any): DataFieldType[] =>
  Object.keys(values).map((field) => ({
    field,
    value: values[field],
  }));

export default parseFormValues;
