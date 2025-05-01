import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DefaultTheme } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: ButtonTypeStyleProps;
  }) => (type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE)};
  border: 1px solid
    ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) =>
      type === "PRIMARY" ? "transparent" : theme.COLORS.GRAY_1};

  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: ButtonTypeStyleProps;
  }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  })
)`
  margin-right: 12px;
`;
