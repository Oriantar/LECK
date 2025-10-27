import type { GradientHeaderProps } from "./types";

export function GradientHeader({
  children,
  from,
  to,
  height,
}: GradientHeaderProps) {
  if (!height) height = "150px";
  if (!from) from = "#bc3cd3";
  if (!to) to = "#ff5892";

  return (
    <header
      style={{
        height,
        background: `linear-gradient(to bottom right, ${from}, ${to})`,
      }}
    >
      {children}
    </header>
  );
}
