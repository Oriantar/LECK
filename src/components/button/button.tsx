import type { ButtonProps } from "./types";
export function Button({
  title,
  subtitle,
  link,
  color,
  textcolor,
}: ButtonProps) {
  if (!color) color = "#0000ff";
  if (!textcolor) textcolor = "white";
  return (
    <a href={link}>
      <button
        style={{
          minHeight: "1rem",
          maxWidth: "8rem",
          padding: "1rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
          backgroundColor: color,
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          color: textcolor,
        }}
      >
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </button>
    </a>
  );
}
