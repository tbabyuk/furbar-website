import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex items-center gap-3 text-coral"
      aria-label="Fur Bar home"
    >
      <span className="font-label flex flex-col items-stretch text-[1.45rem] font-bold leading-none tracking-tight">
        <span>FUR</span>
        <span className="my-[3px] h-[2.5px] w-full bg-coral" />
        <span>BAR</span>
      </span>
      <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-coral/70 text-center font-label text-[7px] font-semibold uppercase leading-[1.15] tracking-[0.12em] sm:flex">
        Pet
        <br />
        Grooming
        <br />
        Services
      </span>
    </Link>
  );
}
