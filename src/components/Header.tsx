"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "@/lib/data";
import { BookButton } from "./BookButton";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-peach">
      <div className="page-wrap flex items-center justify-between gap-4 py-3">
        <Logo onClick={() => setOpen(false)} />

        <div className="flex shrink-0 items-center gap-2">
          <BookButton className="!px-5 !py-2.5">Book</BookButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-ink/10 lg:block">
        <div className="page-wrap flex items-center justify-center gap-x-6 py-2.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-peach lg:hidden">
          <nav className="page-wrap flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 font-label text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
