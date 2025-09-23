"use client";

import { Check, Minus } from "lucide-react";

const features = {
  positives: [
    "Small batch artisanal process",
    "Real Fruit",
    "Wholegrain",
    "Oven Baked",
    "High fiber",
    "All natural",
    "Vegan, Vegetarian",
    "Magnesium, phosphore, iron and zinc source",
    "Tiamin (B1) and Vitamin E Source",
    "Protein Source",
  ],
  negatives: [
    "No palm oil",
    "No added sugar",
    "No artificial aromas",
    "No artificial preservatives",
    "No additives",
    "No added salt",
    "No trans fat",
    "No hydrated oils",
    "No high fructose corn syrup",
    "No glucose",
  ],
};

export default function FeatureList() {
  return (
    <section className="relative w-full py-16 px-6 overflow-hidden">
      {/* Curved yellowish background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white-100 via-green-400 to-yellow-200 -z-10
     [clip-path:polygon(100%_0,75%_6%,49%_0,24%_6%,0_0,4%_21%,0_44%,6%_73%,0_100%,100%_100%,100%_0)]" />

      <div className="mx-auto max-w-6xl text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Makes Us Different
        </h2>
        <p className="mt-2 text-gray-600">
          Carefully selected ingredients and a promise of purity.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {/* ✅ Positive Features */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-lime-700 mb-4">
            Good For You
          </h3>
          {features.positives.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-base font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        {/* 🚫 Negative Features */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            Free From
          </h3>
          {features.negatives.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-400">
                <Minus className="h-4 w-4 text-white" />
              </div>
              <p className="text-base font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
