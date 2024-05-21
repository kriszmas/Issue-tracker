import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueFrom"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const page = () => {
  return <IssueForm />;
};

export default page;
