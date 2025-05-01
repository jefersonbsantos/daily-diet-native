import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type StatusType = "POSITIVE" | "NEGATIVE";

type StatusProps = {
  type: StatusType;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_5};
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_4};
  margin: 0 12px;
`;

export const MealNameText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    flex: 1;
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const StatusIndicator = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-left: 12px;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: StatusType;
  }) => (type === "POSITIVE" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID)};
`;
