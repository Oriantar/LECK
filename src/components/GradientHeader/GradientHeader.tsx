import type { GradientHeaderProps } from "./types";

export function GradientHeader({
  className,
  children,
  from,
  to,
}: GradientHeaderProps) {
  return (
    <header
      className={` h-[125px] bg-gradient-to-br from-[${from}] to-[${to}] color-white ${className}`}
    >
      {children}
    </header>
  );
}
