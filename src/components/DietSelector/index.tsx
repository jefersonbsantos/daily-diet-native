import React from "react";
import {
  Container,
  Label,
  OptionsRow,
  OptionButton,
  StatusIndicator,
  OptionTitle,
} from "./styles";

type Props = {
  label: string;
  value: boolean | null;
  onSelect: (isOnDiet: boolean) => void;
};

export function DietSelector({ label, value, onSelect }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <OptionsRow>
        <OptionButton
          type="POSITIVE"
          isActive={value === true}
          onPress={() => onSelect(true)}
        >
          <StatusIndicator type="POSITIVE" />
          <OptionTitle>Sim</OptionTitle>
        </OptionButton>

        <OptionButton
          type="NEGATIVE"
          isActive={value === false}
          onPress={() => onSelect(false)}
        >
          <StatusIndicator type="NEGATIVE" />
          <OptionTitle>Não</OptionTitle>
        </OptionButton>
      </OptionsRow>
    </Container>
  );
}
