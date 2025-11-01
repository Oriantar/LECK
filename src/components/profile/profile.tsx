import type { ProfileProps } from "./types";

export function Profile({ url, altText, heightAndWidth }: ProfileProps) {
  if (!heightAndWidth) heightAndWidth = "10px";
  return (
    <img
      src={url}
      className=""
      alt={altText}
      style={{
        height: heightAndWidth,
        width: heightAndWidth,
        borderRadius: "100%",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.4)",
        color: "white",
      }}
    />
  );
}
