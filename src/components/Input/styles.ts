import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 4px;
`;

export const InputField = styled(TextInput)`
  width: 100%;
  min-height: 48px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }: { theme: DefaultTheme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
