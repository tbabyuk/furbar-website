import { dogServices, catServices } from "@/lib/data";
import { BookButton } from "./BookButton";

function ServiceList({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: { name: string; description: string }[];
}) {
  return (
    <div className="rounded-[1.6rem] border border-line bg-paper p-7 sm:p-8">
      <p className="font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-coral">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-heading text-3xl">
        {title}
      </h3>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.name} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
            <p className="font-semibold text-ink">{item.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20">
      <div className="page-wrap">
        <div className="max-w-2xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Get your groom on
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Full-service care for dogs and cats.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Every visit is tailored to coat, breed, and temperament. Pricing depends
            on size and condition — your salon will confirm when you book.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ServiceList
            eyebrow="Canine"
            title="Dog grooming"
            items={dogServices}
          />
          <ServiceList
            eyebrow="Feline"
            title="Cat grooming"
            items={catServices}
          />
        </div>

        <p className="mt-6 text-sm text-muted">
          Also available: de-skunk, de-greaser, and cat walk-in add-ons like nail
          trims, sanitary shaves, and Soft Paws. Call ahead for walk-ins.
        </p>

        <div className="mt-8">
          <BookButton>Book at your salon</BookButton>
        </div>
      </div>
    </section>
  );
}
