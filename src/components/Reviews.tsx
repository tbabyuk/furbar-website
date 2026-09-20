import Link from "next/link";
import { locations } from "@/lib/data";
import { googleReviews } from "@/lib/reviews";
import { GoogleReviewCard } from "./GoogleReviewCard";

export function Reviews() {
  return (
    <section className="border-y border-line bg-paper py-20">
      <div className="page-wrap">
        <div className="max-w-2xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Loved across the GTA
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Pet parents keep coming back.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Hundreds of Google reviews across our three salons — the common thread
            is patience, communication, and a pet that looks (and feels) like a
            million bucks.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {googleReviews.map((review) => (
            <GoogleReviewCard key={review.customer} review={review} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={location.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-coral hover:decoration-coral"
            >
              {location.name} Google reviews
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
