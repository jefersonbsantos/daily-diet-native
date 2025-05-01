import React from "react";
import { Container, Logo, Avatar } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={{ uri: "https://placehold.co/82x37" }} />
      <Avatar source={{ uri: "https://placehold.co/40x40" }} />
    </Container>
  );
}
