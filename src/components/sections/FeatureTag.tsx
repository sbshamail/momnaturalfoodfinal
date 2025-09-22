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
    <div className="relative overflow-hidden py-8">
      {/* animation wrapper */}
      <div className="flex animate-scroll gap-4 whitespace-nowrap">
        {[...features, ...features].map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 
                       border border-emerald-500/30 text-emerald-700 text-sm font-medium
                       shadow-sm hover:scale-105 transition-transform"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeatureTags;
