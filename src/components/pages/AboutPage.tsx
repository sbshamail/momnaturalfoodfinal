"use client";

import { Screen } from "@/@core/layout";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Leaf } from "lucide-react";


const AboutPage = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-100 via-green-50 to-white">
      <Screen>
        {/* TOP HERO */}
        <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-10 ">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl font-extrabold text-orange-800 leading-tight">
              About Us <br />
            </h1>
            <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
              Mom’s Natural Foods is all about honest, wholesome, and
              nutritious granola — baked with love, honey, and extra virgin
              olive oil.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Leaf className="h-4 w-4 mr-2" />
              Explore All Products
            </Button>
            </div>
          </div>

          {/* Right product images */}
          <div className="flex-1 flex justify-center relative">
            <Image
              src="/assets/hero1.jpg"
              alt="Granola Pack"
              width={250}
              height={400}
              className="rotate-[-6deg] drop-shadow-xl"
            />
            <Image
              src="/assets/hero2.jpg"
              alt="Granola Pack"
              width={250}
              height={400}
              className="absolute left-32 top-10 rotate-[6deg] drop-shadow-xl"
            />
          </div>
        </div>

        {/* STORY SECTION */}
       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-orange-700 mb-6">
              The Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The journey of <span className="font-semibold">Mom’s Natural Foods</span> 
              began in 2011 in the serene town of Bördübet, Marmaris. What started 
              as a simple homemade recipe soon grew into a passion — baking crunchy, 
              wholesome granola with honey and extra virgin olive oil for family 
              and friends.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The warm aroma quickly spread beyond our home. Friends, yoga instructors, 
              athletes, and children all fell in love with this natural snack. Unlike 
              store-bought cereals loaded with refined sugars, our granola was honest, 
              healthy, and full of flavor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Inspired by our daughter’s love for “the crunchy food” and the encouragement 
              of loved ones, we turned this family passion into a brand — one that brings 
              health and joy to every home.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/assets/about1.jpg"
              alt="About Mom's Natural Foods"
              fill
              className="object-cover rounded-lg"
              priority
            />
          
          </div>
        </div>
      </Screen>
    </section>
  );
};

export default AboutPage;
