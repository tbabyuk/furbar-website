const stats = [
  { value: "3", label: "GTA locations" },
  { value: "4.8+", label: "Google rating" },
  { value: "Dogs + cats", label: "Certified for both" },
  { value: "All breeds", label: "Tiny to extra-large" },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 px-4 py-7 text-center sm:px-6">
            <p className="font-heading text-2xl sm:text-[1.7rem]">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
