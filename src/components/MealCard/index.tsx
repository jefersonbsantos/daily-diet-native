import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  TimeText,
  Divider,
  MealNameText,
  StatusIndicator,
  StatusType,
} from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  name: string;
  isOnDiet: boolean;
};

export function MealCard({ time, name, isOnDiet, ...rest }: Props) {
  const statusType: StatusType = isOnDiet ? "POSITIVE" : "NEGATIVE";

  return (
    <Container {...rest}>
      <TimeText>{time}</TimeText>
      <Divider />
      <MealNameText numberOfLines={1}>{name}</MealNameText>
      <StatusIndicator type={statusType} />
    </Container>
  );
}
