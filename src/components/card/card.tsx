import "../../index.css";
import { H2 } from "../../theme/headings/headings";
import type { CardProps } from "./types";
export function Card({
  title,
  content,
  imageSrc,
  imageAlt,
  link,
  children,
  width,
}: CardProps) {
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          borderRadius: "0.5rem",
          maxWidth: "14rem",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
          width: width ? width : "auto",
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={"100%"}
            style={{ maxHeight: "12rem", borderRadius: "0.5rem 0.5rem 0 0" }}
          />
        )}
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <H2>{title}</H2>
          </div>
          <p>{content}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
        >
          {children}
        </div>
      </div>
    </a>
  );
}
