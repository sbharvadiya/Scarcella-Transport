import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1512px] px-4 sm:px-6 lg:px-16", className)}>
      {children}
    </div>
  );
}
