import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import type { GoogleReview } from "@/lib/reviews";

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const stars = review.rating || 5;

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-sm">
      <div>
        <div className="mb-4 flex gap-x-1">
          {Array.from({ length: stars }).map((_, i) => (
            <FaStar key={i} className="text-lg text-[#FBBC05]" />
          ))}
        </div>
        <p className="leading-relaxed text-muted">{review.text}</p>
      </div>
      <div className="mt-6 flex items-end justify-between border-t border-line pt-4">
        <div>
          <div className="font-medium text-ink">{review.customer}</div>
          {review.service && (
            <div className="text-sm text-muted">{review.service}</div>
          )}
        </div>
        <Link
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${review.customer}'s Google review`}
        >
          <FcGoogle className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
