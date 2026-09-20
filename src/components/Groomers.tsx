"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { groomers } from "@/lib/groomers";

export function Groomers() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: number) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-groomer-card]");
    const amount = (card?.offsetWidth ?? 280) + 16;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-paper py-20">
      <div className="page-wrap">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              The people behind the grooms
            </p>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
              Meet the groomers.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Certified, calm, and the reason nervous pets come back happy.
              Here&apos;s part of the Newmarket team — bios for every salon live
              on the Groomers page.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 hover:text-coral"
            >
              Meet the team
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous groomers"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-coral hover:text-coral"
              >
                <HiChevronLeft className="text-2xl" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next groomers"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-coral hover:text-coral"
              >
                <HiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none"
        >
          {groomers.map((groomer) => (
            <article
              key={groomer.name}
              data-groomer-card
              className="w-[min(78vw,17.5rem)] shrink-0 snap-start"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-ink/5">
                <Image
                  src={groomer.src}
                  alt={`${groomer.name}, groomer at Fur Bar ${groomer.location}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: groomer.objectPosition }}
                  sizes="280px"
                />
              </div>
            <h3 className="mt-4 font-heading text-2xl">{groomer.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
