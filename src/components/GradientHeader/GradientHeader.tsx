import type { gradientHeaderProps } from "./types";

export function gradientHeader({
  className,
  children,
  from,
  to,
}: gradientHeaderProps) {
  return (
    <header
      className={` h-[125px] bg-gradient-to-br from-[${from}] to-[${to}] color-white ${className}`}
    >
      {children}
    </header>
  );
}
