import React from "react";
import { Button } from "../ui/button";
import { Heart, Sparkles } from "lucide-react";
import Header from "../layout/Header";
import { Screen } from "@/@core/layout";
import { HeroCarousel } from "../carousel/HeroCarousel";

const HeroSection = () => {
  return (
    <div>
      <section className="relative pb-20 overflow-hidden ">
        <div className="[clip-path:polygon(100%_1%,100%_100%,75%_94%,49%_100%,24%_94%,0_100%,4%_79%,0_56%,6%_27%,0_0,100%_0)] absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-200"></div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-green-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <Header />

        <div className="mt-10 mx-auto px-4 relative z-10">
          <Screen>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`space-y-8 transition-all duration-1000 delay-300`}
              >
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                    Nourishing the <span className="text-primary">FUTURE</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                    Discover the finest selection of natural, organic foods that
                    nourish your body and soul. From farm to table, we bring you
                    nature's best ingredients.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Discover Products
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Our Story
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Natural Products
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">20+</div>
                    <div className="text-sm text-gray-600">Years Trust</div>
                  </div>
                </div>
              </div>

              <div
                className={`relative transition-all duration-1000 delay-500`}
              >
                <HeroCarousel />
              </div>
            </div>
          </Screen>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
