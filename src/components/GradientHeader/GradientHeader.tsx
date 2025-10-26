import type { gradientHeaderProps } from "./types";

export function gradientHeader({
  className,
  children,
  from,
  to,
  height,
}: gradientHeaderProps) {
  if (!height) height = "125px";
  return (
    <header
      className={` h-[${height}] bg-gradient-to-br from-[${from}] to-[${to}] color-white ${className}`}
    >
      {children}
    </header>
  );
}
