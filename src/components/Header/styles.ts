import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_7};
`;

const BaseImage = styled.Image``;

export const Logo = styled(BaseImage)`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled(BaseImage)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_2};
`;
