import { View, Image, Text } from "react-native";
import "../../index.css";
import { H2 } from "../../theme/headings/headings";
import type { CardProps } from "./types";
export function Card({
  title,
  content,
  imageSrc,
  imageAlt,
  onClick,
  children,
  width,
}: CardProps) {
  return (
      <View
        style={{
          borderRadius: "0.5rem",
          maxWidth: "14rem",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
          width: width ? width : "auto",
        }}
        onClick={onClick}
      >
        {imageSrc && (
          <Image
            source={{ uri: imageSrc }}
            alt={imageAlt}
            style={{ width: "100%", height: "12rem", borderRadius: "0.5rem " }}
          />
        )}
        <View style={{ padding: "1rem" }}>
          <View style={{ display: "flex", justifyContent: "center" }}>
            <H2>{title}</H2>
          </View>
          <Text>{content}</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
        >
          {children}
        </View>
      </View>
  );
}
