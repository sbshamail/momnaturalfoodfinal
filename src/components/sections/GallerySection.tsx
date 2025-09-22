"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Heart, Award } from "lucide-react";
import { Screen } from "@/@core/layout";

const galleryItems = [
  {
    id: 1,
    image: "/assets/gallery1.png",
    title: "Farm Fresh Vegetables",
    category: "Organic Produce",
    icon: Leaf,
    description: "Hand-picked daily from local organic farms",
  },
  {
    id: 2,
    image: "/assets/gallery2.png",
    title: "Artisanal Breads",
    category: "Bakery",
    icon: Heart,
    description: "Freshly baked with ancient grains",
  },
  {
    id: 3,
    image: "/assets/gallery3.png",
    title: "Raw Honey",
    category: "Natural Sweeteners",
    icon: Star,
    description: "Pure, unprocessed honey from local beekeepers",
  },
  {
    id: 4,
    image: "/assets/gallery4.png",
    title: "Organic Herbs",
    category: "Seasonings",
    icon: Leaf,
    description: "Dried herbs and spices from our garden",
  },
  {
    id: 5,
    image: "/assets/gallery5.png",
    title: "Farm Dairy",
    category: "Dairy Products",
    icon: Award,
    description: "Grass-fed dairy from happy cows",
  },
  {
    id: 6,
    image: "/assets/gallery1.png",
    title: "Seasonal Fruits",
    category: "Fresh Fruits",
    icon: Heart,
    description: "Tree-ripened fruits picked at peak flavor",
  },
];

export function GallerySection() {
  return (
    <section
      className="bg-[#b0bb5b] py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
      style={{ clipPath: "ellipse(59% 76% at 60% 49%)" }}
    >
      {/* Background decoration */}
      <Screen>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 text-primary border-primary/20"
              >
                <Star className="w-4 h-4 mr-2" />
                Our Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Nature's Finest Selection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the beauty and quality of our carefully curated natural
                foods.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
            {galleryItems.map((item, index) => (
              <div key={item.id}>
                <div className="group relative">
                  {/* Star-shaped image container */}
                  <div className="relative aspect-square overflow-hidden transition-all duration-700 ">
                    <div
                      className="w-full h-full relative"
                      style={{
                        clipPath:
                          "polygon(100% 1%, 91% 48%, 100% 100%, 49% 100%, 34% 100%, 0 100%, 0 100%, 7% 48%, 0 0, 49% 7%)",
                      }}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Screen>
    </section>
  );
}
