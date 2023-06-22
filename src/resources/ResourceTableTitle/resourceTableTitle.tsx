import React from "react";
import ResourceTableTitleWrapper from "./styled/resourceTableTitleWrapper";

const ResourceTableTitle = ({ children }: { children?: string }) => (
  <ResourceTableTitleWrapper>{children}</ResourceTableTitleWrapper>
);

export default ResourceTableTitle;
