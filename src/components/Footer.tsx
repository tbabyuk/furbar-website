import Link from "next/link";
import { locations, navItems, social } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="page-wrap grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            Raising the bar on dog and cat grooming — one paw at a time. Three
            GTA salons. Family-owned. Built for pets who deserve better.
          </p>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-white/55 hover:text-coral"
          >
            Facebook
          </a>
        </div>

        <div className="lg:col-span-3">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-coral">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Salons
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {locations.map((location) => (
              <div key={location.id}>
                <p className="font-semibold">{location.name}</p>
                <a href={location.phoneHref} className="mt-1 block text-sm text-white/65 hover:text-coral">
                  {location.phone}
                </a>
                <p className="mt-1 text-sm text-white/45">
                  {location.address}
                  <br />
                  {location.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-wrap flex flex-col items-center justify-between gap-5 py-6 text-xs text-white/30 md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Fur Bar Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-white/40">
            <span className="italic">Website by</span>
            <a
              href="https://www.strictlywebdev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-0.5 inline-flex items-center"
            >
              <span className="not-italic font-bold text-white/50 transition-colors group-hover:text-white">
                StrictlyWebDev
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
