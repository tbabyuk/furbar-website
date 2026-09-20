import { whyPoints } from "@/lib/data";

export function Why() {
  return (
    <section className="bg-ink text-paper">
      <div className="page-wrap py-20">
        <div className="max-w-2xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Why we are right fur you
          </p>
          <h2 className="mt-3 font-heading text-4xl text-paper sm:text-5xl">
            A salon built around your pet — not the other way around.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whyPoints.map((point, index) => (
            <div key={point.title} className="border-t border-white/10 pt-6">
              <p className="font-label text-xs tracking-[0.2em] text-coral">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-heading text-2xl text-paper">
                {point.title}
              </h3>
              <p className="mt-2 text-paper/70 leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
