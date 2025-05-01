import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type StatisticsStyleProps = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type Props = {
  type: StatisticsStyleProps;
};

const headerColors = {
  POSITIVE: "GREEN_LIGHT",
  NEGATIVE: "RED_LIGHT",
  NEUTRAL: "GRAY_6",
} as const;

const iconColors = {
  POSITIVE: "GREEN_DARK",
  NEGATIVE: "RED_DARK",
  NEUTRAL: "GRAY_2",
} as const;

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: StatisticsStyleProps;
  }) => theme.COLORS[headerColors[type]]};
`;

export const Header = styled.View<Props>`
  width: 100%;
  padding: 20px 16px;
  padding-top: 32px;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: StatisticsStyleProps;
  }) => theme.COLORS[headerColors[type]]};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 32px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, type }: { theme: DefaultTheme; type: StatisticsStyleProps }) => ({
    size: 24,
    color: theme.COLORS[iconColors[type]],
  })
)``;

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

export const Content = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 23px;
`;

export const CardsRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
