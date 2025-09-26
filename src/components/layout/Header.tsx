"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { Screen } from "@/@core/layout";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Recipes", href: "/recipes" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-transparent text-background transition-all duration-700">
      <Screen>
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="h-16 bg-foreground/70 backdrop-blur-md rounded-l-lg flex-1 px-4 sm:px-6 md:px-8 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            <div className="relative w-max h-full flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Mom's Natural Foods"
                  width={160}
                  height={160}
                  className="object-contain h-12 sm:h-14 md:h-16 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav + Register */}
          <div className="hidden md:flex items-center gap-6 bg-foreground/40 backdrop-blur-md h-16 px-6 md:px-10 rounded-r-lg [clip-path:polygon(4%_0,100%_0,100%_100%,0%_100%)]">
            <nav className="flex space-x-6 lg:space-x-8">
              {pages.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-primary font-medium transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/login">
              <Button className="ml-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Leaf className="h-4 w-4 mr-2" />
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-foreground/50 backdrop-blur-md text-white"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-foreground/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6 z-40">
            {pages.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-200 hover:text-primary font-medium text-lg transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button className="w-40 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg transition-all duration-300">
                <Leaf className="h-4 w-4 mr-2" />
                Register
              </Button>
            </Link>
          </div>
        )}
      </Screen>
    </header>
  );
};

export default Header;
