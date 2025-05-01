import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_7};
  padding: 0 24px;
`;

export const MealsTitle = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 8px;
`;

export const SectionHeader = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 32px;
  margin-bottom: 8px;
`;
