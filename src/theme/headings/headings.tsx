import React from "react";
import { Text } from "react-native-web";
import { HeadingProps } from "./types";

export function H1({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 16,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function H2({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 16,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function H3({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 12,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function H4({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 12,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function H5({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 12,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
export function H6({ children, style }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 12,
        fontWeight: "bold",
        marginVertical: 12,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
