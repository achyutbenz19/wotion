import { Id } from "@/convex/_generated/dataModel";
import React from "react";

const DocumentIdPage = ({
  params,
}: {
  params: { documentId: Id<"documents"> };
}) => {
  return <div>{params.documentId}</div>;
};

export default DocumentIdPage;
