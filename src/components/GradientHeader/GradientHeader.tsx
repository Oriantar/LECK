<<<<<<< HEAD
import type { gradientHeaderProps } from "./types";

export function gradientHeader({
=======
import type { GradientHeaderProps } from "./types";

export function GradientHeader({
>>>>>>> a4b523ae8466e98e86105c25bdc2fa288c5554ad
  className,
  children,
  from,
  to,
<<<<<<< HEAD
  height,
}: gradientHeaderProps) {
  if (!height) height = "125px";
  return (
    <header
      className={` h-[${height}] bg-gradient-to-br from-[${from}] to-[${to}] color-white ${className}`}
=======
}: GradientHeaderProps) {
  return (
    <header
      className={` h-[125px] bg-gradient-to-br from-[${from}] to-[${to}] color-white ${className}`}
>>>>>>> a4b523ae8466e98e86105c25bdc2fa288c5554ad
    >
      {children}
    </header>
  );
}
