import { Screen } from "@/@core/layout";
import Image from "next/image";
import React from "react";

const DescriptionBanner = () => {
  return (
    <section className="py-16">
      <Screen>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] ">
              <Image
                src="/assets/plate.png"
                width={500}
                height={500}
                alt="plate"
                className="object-cover w-full h-full rounded-lg
                  shadow-xl"
              />
              {/* Optional soft background glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-[40%] blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-bold text-primary tracking-wide uppercase">
              Something about us
            </p>
            <h2 className="text-3xl font-bold italic leading-snug">
              Why Mom’s Natural Foods?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We make MOM’S natural foods for people that won’t compromise
              between healthy and delicious. We want our product to be
              affordable and widely available for everyone. All ingredients that
              we use could be easily read, understood, and pronounced. Mom’s
              doesn’t have any chemical additives, coloring, flavoring, and
              sugar. We believe that it is very important to read the
              ingredients of the product carefully before you buy one. So we
              created types of granola, muesli & cookie as simple as, delicious,
              and as original as prepared by mothers.
            </p>
          </div>
        </div>
      </Screen>
    </section>
  );
};

export default DescriptionBanner;
