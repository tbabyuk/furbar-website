import Link from "next/link";

type BookButtonProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  external?: boolean;
};

const styles = {
  primary:
    "bg-coral text-white hover:bg-coral-dark shadow-[0_10px_24px_-12px_rgba(240,82,61,0.8)]",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
  light:
    "bg-paper text-ink hover:bg-white",
};

export function BookButton({
  href = "#locations",
  children = "Book your groom",
  variant = "primary",
  className = "",
  external = false,
}: BookButtonProps) {
  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
