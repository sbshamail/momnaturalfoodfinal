"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Leaf } from "lucide-react";

const images = [
  {
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    label: "100% Organic",
  },
  {
    url: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800",
    label: "Farm Fresh",
  },
  {
    url: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800",
    label: "Natural Goodness",
  },
];

export function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000, // 4s delay between slides
        }),
      ]}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {images.map((item, idx) => (
          <CarouselItem key={idx}>
            <div className="relative group">
              {/* background glow */}
              <div className="absolute inset-0 bg-gradient-to-r    rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* image */}
              <div className="relative transition-all duration-1000">
                <Image
                  src={item.url}
                  alt={item.label}
                  width={1200}
                  height={800}
                  className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl transform group-hover:rotate-2  group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* label badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-1">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
