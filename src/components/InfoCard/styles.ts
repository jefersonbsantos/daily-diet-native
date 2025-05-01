import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export type CardVariant = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type Props = {
  variant: CardVariant;
};

const variantColors = {
  POSITIVE: "GREEN_LIGHT",
  NEGATIVE: "RED_LIGHT",
  NEUTRAL: "GRAY_6",
} as const;

export const Container = styled.View<Props>`
  min-width: 157px;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;

  background-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: CardVariant;
  }) => theme.COLORS[variantColors[variant]]};

  align-items: center;
  justify-content: center;
`;

export const ValueText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const DescriptionText = styled.Text`
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
