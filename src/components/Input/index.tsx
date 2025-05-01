import React from "react";
import { TextInputProps } from "react-native";
import { Container, Label, InputField } from "./styles";

type Props = TextInputProps & {
  label: string;
  height?: number;
};

export function Input({ label, height, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        multiline={!!height}
        style={height ? { height, textAlignVertical: "top" } : {}}
        {...rest}
      />
    </Container>
  );
}
