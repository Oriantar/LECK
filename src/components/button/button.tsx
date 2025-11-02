import { H4 } from "../../theme/headings";
import "../../index.css";
import type { ButtonProps } from "./types";
export function Button({
  title,
  subtitle,
  link,
  color,
  textcolor,
  style,
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
          border: "0.125px solid black",
          borderRadius: "0.5rem",
          cursor: "pointer",
          color: textcolor,
          ...style,
        }}
      >
        <H4 style={{ color: textcolor }}>{title}</H4>
        <p>{subtitle}</p>
      </button>
    </a>
  );
}
