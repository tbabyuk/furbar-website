import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  return (
    <section className="py-20">
      <div className="page-wrap">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              Fresh off the table
            </p>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
              The after photos say it best.
            </h2>
          </div>
          <Link
            href="#"
            className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 hover:text-coral"
          >
            Photo gallery
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
