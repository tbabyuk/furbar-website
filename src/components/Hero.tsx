import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { locations } from "@/lib/data";
import { BookButton } from "./BookButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-wrap grid items-center gap-8 py-8 sm:gap-10 sm:py-16 lg:grid-cols-12 lg:items-stretch lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Toronto · North York · Newmarket
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[2.7rem] leading-[1.08] sm:text-5xl lg:text-[3.55rem]">
            Stress-free grooming, from nose to tail.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Fur Bar pampers dogs and cats in a clean, calm salon. Certified
            groomers, hypoallergenic products, and a booking you can actually
            get — not a four-week wait.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookButton>Book your groom</BookButton>
            <BookButton href="#services" variant="secondary">
              See services
            </BookButton>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/12 bg-paper px-3 py-1.5 text-[12px] font-medium text-ink/80 transition-colors hover:border-coral hover:text-coral"
              >
                Book {location.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <p className="inline-flex items-center gap-1.5">
              <span className="inline-flex text-[#FBBC05]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-[13px]" />
                ))}
              </span>
              <span className="font-medium text-ink">4.8+ on Google</span>
            </p>
            <p>Dogs &amp; cats</p>
            <p>20+ years experience</p>
          </div>
        </div>

        <div className="relative order-1 min-h-[220px] lg:order-2 lg:col-span-6 lg:min-h-[280px]">
          <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-ink/5 sm:aspect-4/5 lg:absolute lg:inset-0 lg:aspect-auto">
            <Image
              src="/images/gallery/bernese.jpg"
              alt="A freshly groomed fluffy dog sitting proudly at Fur Bar"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1024px) 50vw, 90vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/35 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-paper/95 px-4 py-3 shadow-lg">
              <p className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-coral">
                Raising the bar
              </p>
              <p className="font-heading text-sm">One paw at a time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
