import { locations } from "@/lib/data";
import { BookButton } from "./BookButton";

export function FinalCta() {
  return (
    <section className="py-16">
      <div className="page-wrap">
        <div className="overflow-hidden rounded-[2rem] bg-coral px-6 py-14 text-center text-white sm:px-12">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Ready when they are
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-4xl text-paper sm:text-5xl">
            Book the groom. We&apos;ll handle the rest.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Choose your salon, pick a time, and bring them in. Safe, clean, and
            raised-the-bar care — from first puppy trim to regular spa day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <BookButton
                key={location.id}
                href={location.bookingUrl}
                external
                variant="light"
              >
                Book {location.name}
              </BookButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
