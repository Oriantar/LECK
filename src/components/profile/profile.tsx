import type { ProfileProps } from "./types";

export function Profile({ url, altText }: ProfileProps) {
  return (
    <img
      src={url}
      className="h-10 w-10 rounded-full shadow-lg shadow-black/40"
      alt={altText}
    />
  );
}
