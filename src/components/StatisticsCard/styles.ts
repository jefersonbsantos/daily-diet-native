import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DefaultTheme } from "styled-components/native";

export type CardTypeStyleProps = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type Props = {
  type: CardTypeStyleProps;
};

const typeColors = {
  POSITIVE: "GREEN_LIGHT",
  NEGATIVE: "RED_LIGHT",
  NEUTRAL: "GRAY_6",
} as const;

const iconColors = {
  POSITIVE: "GREEN_DARK",
  NEGATIVE: "RED_DARK",
  NEUTRAL: "GRAY_2",
} as const;

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  margin-bottom: 40px;

  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: CardTypeStyleProps;
  }) => theme.COLORS[typeColors[type]]};

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }: { theme: DefaultTheme; type: CardTypeStyleProps }) => ({
    size: 24,
    color: theme.COLORS[iconColors[type]],
  })
)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PercentageText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 2px;
`;

export const DescriptionText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
