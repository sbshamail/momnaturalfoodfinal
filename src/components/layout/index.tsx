import React from "react";
import Header from "./Header";
import { ChildrenType } from "@/utils/reactTypes";
import Footer from "./Footer";

interface Props {
  children: ChildrenType;
}
const CustomerLayout = ({ children }: Props) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default CustomerLayout;
