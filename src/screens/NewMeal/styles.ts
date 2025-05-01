import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_5};
`;

export const Header = styled(SafeAreaView)`
  width: 100%;
  padding: 20px 24px;
  padding-top: 32px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_5};
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 104px;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 32px;
`;

export const BackIcon = styled(ArrowLeft).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2,
  })
)``;

export const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 40px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const InputContainer = styled.View`
  flex: 1;
`;
