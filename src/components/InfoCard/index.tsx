import React from "react";
import { Container, ValueText, DescriptionText, CardVariant } from "./styles";
import { ViewStyle } from "react-native";

type Props = {
  value: number | string;
  description: string;
  variant?: CardVariant;
  style?: ViewStyle;
};

export function InfoCard({
  value,
  description,
  variant = "NEUTRAL",
  style,
}: Props) {
  return (
    <Container variant={variant} style={style}>
      <ValueText>{value}</ValueText>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  );
}
