const FeatureTags = () => {
  const features = [
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
  ];

  return (
    <div className="relative overflow-hidden py-10 bg-gradient-to-r from-green-200 to-yellow-200">
      {/* animation wrapper */}
      <div className="flex animate-scroll gap-6 whitespace-nowrap">
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            className="px-6 py-2 text-sm md:text-base font-semibold text-white
                       bg-gradient-to-r from-green-600 to-emerald-600
                       hover:from-green-700 hover:to-emerald-700
                       shadow-lg hover:shadow-xl
                       transition-all duration-400 hover:scale-105
                       [clip-path:polygon(50%_0,75%_5%,100%_0,100%_100%,75%_95%,50%_100%,25%_95%,0_100%,0_0,25%_5%)]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* subtle fade edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default FeatureTags;
