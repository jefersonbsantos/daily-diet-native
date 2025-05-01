import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type OptionType = "POSITIVE" | "NEGATIVE";

type OptionButtonProps = {
  type: OptionType;
  isActive: boolean;
};

type StatusIndicatorProps = {
  type: OptionType;
};

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
  margin-bottom: 8px;
`;

export const OptionsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionButton = styled(TouchableOpacity)<OptionButtonProps>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  margin: 0 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;

  ${({
    theme,
    type,
    isActive,
  }: {
    theme: DefaultTheme;
    type: OptionType;
    isActive: boolean;
  }) => {
    if (isActive) {
      return css`
        background-color: ${type === "POSITIVE"
          ? theme.COLORS.GREEN_LIGHT
          : theme.COLORS.RED_LIGHT};
        border-color: ${type === "POSITIVE"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK};
      `;
    }
    return css`
      background-color: ${theme.COLORS.GRAY_6};
    `;
  }}
`;

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: OptionType;
  }) =>
    type === "POSITIVE" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const OptionTitle = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
