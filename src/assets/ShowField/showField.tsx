import React from "react";
import ShowFieldWrapper from "./styled/showFieldWrapper";
import { Image } from "primereact/image";
import ImageWrapper from "./styled/imageWrapper";
import useShowField from "./talons/useShowField";
import { memo } from "react";
import {
  ArrayFieldWrapper,
  ArrayFieldsWrapper,
} from "./styled/arrayFieldsWrapper";
import { DataFieldType } from "../../types/InputEventTypes";
import ArrayField from "./arrayField";

interface ShowFieldProps {
  item: DataFieldType;
  label: string;
  arrayTitle: string;
  emptyLabel: string;
}

const LOGO = "logo";

const ShowField = ({ item, label, arrayTitle, emptyLabel }: ShowFieldProps) => {
  const { value, field, isArray } = item;

  const { correctValue, parsedArrayValues } = useShowField({
    value,
    isArray,
    arrayTitle,
    emptyLabel,
  });

  return (
    <ShowFieldWrapper>
      <span>{label}</span>
      {isArray &&
        field !== LOGO &&
        (Array.isArray(parsedArrayValues) ? (
          <ArrayFieldsWrapper>
            {parsedArrayValues.map(
              ({ field: pF, value: pV, title: pT }: DataFieldType) => (
                <ArrayFieldWrapper>
                  <p>{pF}</p>
                  <ArrayField title={pT} values={pV} />
                </ArrayFieldWrapper>
              )
            )}
          </ArrayFieldsWrapper>
        ) : (
          parsedArrayValues
        ))}
      {!isArray &&
        field !== LOGO &&
        (Array.isArray(correctValue) ? (
          <ArrayFieldsWrapper>
            {correctValue.map((cv) => (
              <ArrayFieldWrapper>
                <p>{cv.field}</p>
                <span>{cv.value}</span>
              </ArrayFieldWrapper>
            ))}
          </ArrayFieldsWrapper>
        ) : (
          correctValue
        ))}
      {field === LOGO && (
        <ImageWrapper>
          <Image src={value} alt={field} width="150" preview />
        </ImageWrapper>
      )}
    </ShowFieldWrapper>
  );
};

export default memo(ShowField);
