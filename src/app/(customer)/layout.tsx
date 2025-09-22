import React from "react";
import CustomerLayout from "@/components/layout";
import { ChildrenType } from "@/utils/reactTypes";

interface Props {
  children: ChildrenType;
}
const layout = ({ children }: Props) => {
  return <CustomerLayout>{children}</CustomerLayout>;
};

export default layout;
