import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline-dark" | "outline-light" | "dark";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-bright text-white hover:bg-brand",
  dark: "bg-ink text-white hover:bg-ink-soft",
  "outline-dark":
    "border border-ink/20 text-ink hover:bg-ink hover:text-white",
  "outline-light":
    "border border-white/30 text-white hover:bg-white hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
