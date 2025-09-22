import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Leaf } from "lucide-react";
import { Screen } from "@/@core/layout";
const Header = () => {
  return (
    <header
      className={`sticky top-0 z-50 h-16 bg-transparent text-background  transition-all duration-1000 `}
    >
      <Screen>
        <div className="h-16  flex items-center justify-between">
          <div className="h-18 bg-foreground/70 backdrop-blur-md rounded-l-lg  max-w-96 flex-1 px-8 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            <div className="relative w-max ">
              <Image
                src="/logo.png"
                alt="Mom's Natural Foods"
                width={200}
                height={200}
                className="object-contain h-16 w-auto "
              />
            </div>
          </div>
          <div className="flex items-center gap-6 bg-foreground/40 backdrop-blur-md h-18 px-10 rounded-r-lg [clip-path:polygon(2%_0,100%_0%,100%_98%,0%_100%)]">
            <nav className="hidden md:flex space-x-8">
              {["Home", "Products", "About", "Recipes", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-gray-300 hover:text-primary font-medium transition-all duration-300 hover:scale-105 `}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Leaf className="h-4 w-4 mr-2" />
              Explore
            </Button>
          </div>
        </div>
      </Screen>
    </header>
  );
};

export default Header;
