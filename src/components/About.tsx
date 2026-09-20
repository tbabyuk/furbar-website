import Image from "next/image";

export function About() {
  return (
    <section className="bg-paper">
      <div className="page-wrap grid items-center gap-10 py-20 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="relative min-h-[280px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink/5 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
            <Image
              src="/images/gallery/doodle.jpg"
              alt="A freshly groomed doodle sitting proudly at Fur Bar"
              fill
              className="object-cover object-[50%_28%]"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Our doggy tail
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Built by pet parents who were tired of the wait.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            At Fur Bar, we know the love we get from our pets is better than
            anything else — so they deserve our very best. As pet parents
            ourselves, we know every furry friend needs their own blend of care.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We launched Fur Bar to bring high-quality, stress-free grooming to
            more Canadian pet owners, without the month-long wait that used to
            be the norm. Integrity, passion, excellence, teamwork — and a little
            fun — are the pawprints we run on.
          </p>
          <p className="mt-6 font-heading text-xl">
            Love at first woof.
          </p>
          <p className="mt-1 text-sm text-muted">
            Noah Aychental &amp; Rachel Dombrowsky
            <br />
            Leaders of the Pack
          </p>
        </div>
      </div>
    </section>
  );
}
