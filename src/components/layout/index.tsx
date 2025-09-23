"use client";
import { usePathname } from "next/navigation";
import { ChildrenType } from "@/utils/reactTypes";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ChildrenType;
}
const CustomerLayout = ({ children }: Props) => {
  const pathname = usePathname(); // client hook

  return (
    <div>
      {pathname !== "/" && pathname !== "/contact" && <Header />}

      {children}
      <Footer />
    </div>
  );
};

export default CustomerLayout;
