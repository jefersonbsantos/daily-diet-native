import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  PercentageText,
  DescriptionText,
  CardTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  percentage: number;
  type?: CardTypeStyleProps;
};

export function StatisticsCard({
  percentage,
  type = "POSITIVE",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name="arrow-upward" />
      <PercentageText>{percentage.toFixed(2)}%</PercentageText>
      <DescriptionText>das refeições dentro da dieta</DescriptionText>
    </Container>
  );
}
