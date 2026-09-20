import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { locations } from "@/lib/data";
import { BookButton } from "./BookButton";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-24 py-20">
      <div className="page-wrap">
        <div className="max-w-2xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Three salons. One standard.
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Book the Fur Bar closest to you.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Online booking takes a couple of minutes. Prefer to talk it through?
            Call the salon — they&apos;ll match your pet with the right groomer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.id}
              className="flex flex-col rounded-[1.6rem] border border-line bg-paper p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-3xl">
                  {location.name}
                </h3>
                {"note" in location && location.note && (
                  <span className="rounded-full bg-coral/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-coral">
                    {location.note}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {location.address}
                <br />
                {location.city}
              </p>

              <div className="mt-4 space-y-1 text-sm">
                <a href={location.phoneHref} className="block font-medium text-ink hover:text-coral">
                  {location.phone}
                </a>
                <a href={`mailto:${location.email}`} className="block text-muted hover:text-coral">
                  {location.email}
                </a>
              </div>

              <ul className="mt-6 flex-1 space-y-1.5 border-t border-line pt-5 text-sm">
                {location.hours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4">
                    <span className="text-muted">{row.day}</span>
                    <span className={row.time === "Closed" ? "text-muted/60" : "text-ink"}>
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <BookButton href={location.bookingUrl} external className="w-full">
                  Book {location.name}
                </BookButton>
                <div className="flex justify-between text-sm">
                  <Link
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted hover:text-coral"
                  >
                    Directions <HiArrowUpRight />
                  </Link>
                  <Link
                    href={location.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-coral"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
